/*
  # Create health check responses table

  1. New Tables
    - `health_check_responses`
      - `id` (uuid, primary key) - Unique identifier for each response
      - `user_id` (uuid, references auth.users) - User who completed the health check
      - `first_name` (text) - User's first name
      - `last_name` (text) - User's last name
      - `email` (text) - User's email address
      - `mobile` (text) - User's mobile number
      - `company_name` (text) - Name of the company
      - `company_industry` (text) - Industry of the company
      - `company_revenue` (text) - Annual revenue range
      - `num_employees` (text) - Number of employees range
      - `country` (text) - Country of operation
      - `responses` (jsonb) - Question responses stored as JSON
      - `environmental_score` (integer) - Calculated environmental score
      - `social_score` (integer) - Calculated social score
      - `governance_score` (integer) - Calculated governance score
      - `total_score` (integer) - Total ESG score
      - `completed` (boolean, default false) - Whether health check is completed
      - `created_at` (timestamptz, default now()) - When record was created
      - `updated_at` (timestamptz, default now()) - When record was last updated

  2. Security
    - Enable RLS on `health_check_responses` table
    - Add policy for users to read their own responses
    - Add policy for users to insert their own responses
    - Add policy for users to update their own responses
*/

CREATE TABLE IF NOT EXISTS health_check_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  company_name text NOT NULL,
  company_industry text NOT NULL,
  company_revenue text NOT NULL,
  num_employees text NOT NULL,
  country text NOT NULL,
  responses jsonb DEFAULT '{}'::jsonb,
  environmental_score integer DEFAULT 0,
  social_score integer DEFAULT 0,
  governance_score integer DEFAULT 0,
  total_score integer DEFAULT 0,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE health_check_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own health check responses"
  ON health_check_responses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own health check responses"
  ON health_check_responses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own health check responses"
  ON health_check_responses
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS health_check_responses_user_id_idx ON health_check_responses(user_id);
CREATE INDEX IF NOT EXISTS health_check_responses_created_at_idx ON health_check_responses(created_at DESC);

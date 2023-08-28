CREATE OR REPLACE FUNCTION student_full_name(student_row student)
RETURNS TEXT AS $$
  SELECT student_row.last_name || ' ' || student_row.first_name
$$ LANGUAGE sql STABLE;

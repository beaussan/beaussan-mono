drop function public.is_open_practice_to_promotion_fn;

CREATE OR REPLACE FUNCTION public.is_open_practice_to_course_fn(practice_row practice_to_course)
    RETURNS BOOLEAN AS $$
SELECT
        practice_row.open_date IS NOT NULL AND
        practice_row.close_date IS NOT NULL and
        now() BETWEEN practice_row.open_date AND practice_row.close_date
$$ LANGUAGE sql STABLE;

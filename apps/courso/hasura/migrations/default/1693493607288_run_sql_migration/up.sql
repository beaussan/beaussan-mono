CREATE VIEW calculated_grades AS
WITH yield_grades AS (SELECT psgm.practice_to_student_yield_id,
                             sum(psgm.percent_grade)               as percent_grade,
                             sum(pygm.points)                      as total_points,
                             sum(pygm.points * psgm.percent_grade) as weighted_points
                      FROM practice_to_student_grade_metric psgm
                               JOIN
                           public.practice_yield_grade_metric pygm
                           ON
                               pygm.id = psgm.practice_yield_grade_metric_id
                      GROUP BY psgm.practice_to_student_yield_id),
     sum_grades AS (SELECT ptsy.practice_to_student_id,
                           sum(yield_grades.total_points)    as cal_total_points,
                           sum(yield_grades.weighted_points) as cal_weighted_points
                    FROM practice_to_student_yield ptsy
                             JOIN
                         yield_grades
                         ON
                             yield_grades.practice_to_student_yield_id = ptsy.id
                    group by ptsy.practice_to_student_id)
select id as practice_to_student_id, ROUND((((cal_weighted_points * 20) / cal_total_points * 100) / 100), 2) as calculated_grade
from practice_to_student pts
         join sum_grades sg on pts.id = sg.practice_to_student_id;

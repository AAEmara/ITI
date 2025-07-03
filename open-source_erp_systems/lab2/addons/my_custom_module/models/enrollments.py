from odoo import models, fields

class Enrollment(models.Model):
    _name = "my.enrollment"
    _description = "Enrollment"

    name = fields.Char(string='Enrollment Name')
    student_id = fields.Many2one('my.student', string="Student ID", required=True)
    course_id = fields.Many2one('my.course', string="Course ID", required=True)
    date = fields.Date(string="Enrollment Date")
    cost = fields.Float(string="Course Cost", related="course_id.cost", store=True)
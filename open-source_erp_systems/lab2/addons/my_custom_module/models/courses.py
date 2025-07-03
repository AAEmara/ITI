from odoo import models, fields

class Course(models.Model):
    _name = 'my.course'
    _description = 'Course'

    name = fields.Char(string='Course Name', required=True)
    start_date = fields.Date(string='Start Date')
    end_date = fields.Date(string='End Date')
    cost = fields.Float(string='Cost')
    teacher = fields.Char(string='Teacher')
    enrollments_ids = fields.One2many('my.enrollment', 'course_id', string='Enrollments')

from odoo import models, fields, api
class Enrollment(models.Model):
    _name = "my.enrollment"
    _description = "Enrollment"

    name = fields.Char(string='Enrollment Name')
    student_id = fields.Many2one('my.student', string="Student ID", required=True)
    course_id = fields.Many2one('my.course', string="Course ID", required=True)
    date = fields.Date(string="Enrollment Date")
    cost = fields.Float(string="Course Cost", related="course_id.cost")

    @api.model
    def create(self, values):
        result = super(Enrollment, self).create(values)
        course_name = result.course_id.name
        student_name = result.student_id.name
        result.name = 'course:'+course_name+', student:'+student_name
        return result
    
    def write(self, values):
        if 'course_id' in values:
            course = self.env['my.course'].search([('id', '=', int(values.get('course_id')))])
            student_name = self.student_id.name
            course_name = course.name
            values['name'] = f'course:{course_name}, student:{student_name}'
        return super(Enrollment, self).write(values)

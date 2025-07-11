from odoo import models, fields, api

class Course(models.Model):
    _name = 'my.course'
    _description = 'Course'

    name = fields.Char(string='Course Name', required=True)
    start_date = fields.Date(string='Start Date')
    end_date = fields.Date(string='End Date')
    cost = fields.Float(string='Cost')
    teacher = fields.Char(string='Teacher')
    enrollments_ids = fields.One2many('my.enrollment', 'course_id', string='Enrollments')
    number_of_enrollments = fields.Integer(string="Number of Enrollments",
                                          compute="_get_number_of_enrollments",
                                          readonly=True, store=True)
    state = fields.Selection(
        selection=[('open', 'OPEN'), ('close', 'CLOSE')]
    )
    reason = fields.Char(string="Reason")
    
    @api.depends('enrollments_ids')
    def _get_number_of_enrollments(self):
        for rec in self:
            rec.number_of_enrollments = len(rec.enrollments_ids)

    def close_course(self):
        return {
            'name': 'Close Reason',
            'type': 'ir.actions.act_window',
            'view_mode': 'form',
            'res_model': 'course.close.wizard',
            'view_id': self.env.ref("my_custom_module.close_reason_view_form").id,
            'context': {'default_course_id': self.id},
            'target': 'new',
        }

    def open_course(self):
        for rec in self:
            rec.state = 'open'
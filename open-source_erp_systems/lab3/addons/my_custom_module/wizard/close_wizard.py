from odoo import models, fields


class CourseCloseWizard(models.TransientModel):
    _name = 'course.close.wizard'

    reason = fields.Char(string="Reason")
    course_id = fields.Many2one('my.course')

    def confirm_reason(self):
        if self.course_id:
            self.course_id.write({
                'reason': self.reason,
                'state': 'close'
            })
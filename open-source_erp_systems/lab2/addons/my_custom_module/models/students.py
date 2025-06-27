from odoo import models, fields

class Student(models.Model):
    _name = 'my.student'
    _description = 'Student'

    name = fields.Char(string='Student Name', required=True)
    code = fields.Char(string='Code', required=True)
    birthdate = fields.Date(string='Date of Birth')
    address = fields.Char(string='Address')
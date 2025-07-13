# -*- coding: utf-8 -*-
# from odoo import http


# class EditInSystem(http.Controller):
#     @http.route('/edit_in_system/edit_in_system', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/edit_in_system/edit_in_system/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('edit_in_system.listing', {
#             'root': '/edit_in_system/edit_in_system',
#             'objects': http.request.env['edit_in_system.edit_in_system'].search([]),
#         })

#     @http.route('/edit_in_system/edit_in_system/objects/<model("edit_in_system.edit_in_system"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('edit_in_system.object', {
#             'object': obj
#         })


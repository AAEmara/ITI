# -*- coding: utf-8 -*-

from odoo import models, fields, api
from odoo.addons.sale.models.sale_order import SaleOrder as SaleOrderInherit
from odoo.fields import Command

def _prepare_invoice(self):
    """
    Prepare the dict of values to create the new invoice for a sales order. This method may be
    overridden to implement custom invoice generation (making sure to call super() to establish
    a clean extension chain).
    """
    self.ensure_one()

    txs_to_be_linked = self.transaction_ids.sudo().filtered(
        lambda tx: (
            tx.state in ('pending', 'authorized')
            or tx.state == 'done' and not (tx.payment_id and tx.payment_id.is_reconciled)
        )
    )

    values = {
        'ref': self.client_order_ref or '',
        'move_type': 'out_invoice',
        'narration': self.note,
        'currency_id': self.currency_id.id,
        'campaign_id': self.campaign_id.id,
        'medium_id': self.medium_id.id,
        'source_id': self.source_id.id,
        'team_id': self.team_id.id,
        # start edit
        'car_number':self.car_number,
        # end
        'partner_id': self.partner_invoice_id.id,
        'partner_shipping_id': self.partner_shipping_id.id,
        'fiscal_position_id': (self.fiscal_position_id or self.fiscal_position_id._get_fiscal_position(self.partner_invoice_id)).id,
        'invoice_origin': self.name,
        'invoice_payment_term_id': self.payment_term_id.id,
        'invoice_user_id': self.user_id.id,
        'payment_reference': self.reference,
        'transaction_ids': [Command.set(txs_to_be_linked.ids)],
        'company_id': self.company_id.id,
        'invoice_line_ids': [],
        'user_id': self.user_id.id,
    }
    if self.journal_id:
        values['journal_id'] = self.journal_id.id
    return values

SaleOrderInherit._prepare_invoice = _prepare_invoice



class SaleOrder(models.Model):
    _inherit = 'sale.order'
    
    car_number = fields.Char(string='Car Number')
    
    # def _prepare_invoice(self):
    #     res = super(SaleOrder,self)._prepare_invoice()
    #     res['car_number'] = self.car_number

    #     return res
    
class SaleOrderLine(models.Model):
    _inherit = 'sale.order.line'
    
    brand = fields.Char(related='product_template_id.brand')

   

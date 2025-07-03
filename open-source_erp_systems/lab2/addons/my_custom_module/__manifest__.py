{
    'name': 'Courses Module',
    'version': '1.0',
    'depends': ['base'],
    'author': 'Abdelrahman Emara',
    'category': 'Uncategorized',
    'description': 'A custom module for courses.',
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/courses_views.xml',
        'views/students_views.xml',
        'views/enrollments_views.xml',
        ],
    'installable': True,
    'application': True
}

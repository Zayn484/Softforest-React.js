# Generated by Django 2.1.7 on 2019-05-11 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0012_project_on_sale'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='discount_rate',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=100),
        ),
    ]

# Generated by Django 2.1.7 on 2019-03-07 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='ratings',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=50, null=True),
        ),
    ]

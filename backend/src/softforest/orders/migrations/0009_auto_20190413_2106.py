# Generated by Django 2.1.7 on 2019-04-14 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_auto_20190413_1055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='project',
            field=models.ManyToManyField(blank=True, to='projects.Project'),
        ),
    ]

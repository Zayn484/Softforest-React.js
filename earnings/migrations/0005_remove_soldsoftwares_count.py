# Generated by Django 2.1.7 on 2019-04-29 14:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('earnings', '0004_auto_20190429_1855'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='soldsoftwares',
            name='count',
        ),
    ]
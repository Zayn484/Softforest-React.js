# Generated by Django 2.1.7 on 2019-04-29 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('earnings', '0003_soldsoftwares_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='soldsoftwares',
            name='count',
            field=models.PositiveIntegerField(default=1),
        ),
    ]

# Generated by Django 2.1.7 on 2019-05-11 14:54

import django.core.files.storage
from django.db import migrations, models
import projects.models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0013_project_discount_rate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectfile',
            name='file',
            field=models.FileField(storage=django.core.files.storage.FileSystemStorage(location='C:\\Users\\ZAYN\\WebDev\\SoftForest\\backend\\src\\softforest\\static_cdn\\protected_media'), upload_to=projects.models.upload_project_file_loc),
        ),
    ]

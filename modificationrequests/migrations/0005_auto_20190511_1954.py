# Generated by Django 2.1.7 on 2019-05-11 14:54

import django.core.files.storage
from django.db import migrations, models
import modificationrequests.models


class Migration(migrations.Migration):

    dependencies = [
        ('modificationrequests', '0004_auto_20190426_1009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(storage=django.core.files.storage.FileSystemStorage(location='C:\\Users\\ZAYN\\WebDev\\SoftForest\\backend\\src\\softforest\\static_cdn\\protected_media'), upload_to=modificationrequests.models.upload_file_loc),
        ),
    ]

# Generated by Django 2.1.7 on 2019-05-11 15:13

import django.core.files.storage
from django.db import migrations, models
import modificationrequests.models


class Migration(migrations.Migration):

    dependencies = [
        ('modificationrequests', '0006_auto_20190511_2001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(storage=django.core.files.storage.FileSystemStorage(location='C:\\Users\\ZAYN\\WebDev\\SoftForest\\backend\\static_cdn\\protected_media'), upload_to=modificationrequests.models.upload_file_loc),
        ),
    ]

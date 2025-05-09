# Generated by Django 4.1.5 on 2023-01-19 21:23

import bookstore_account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookstore_account', '0002_alter_user_profile_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='profile_pic',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to=bookstore_account.models.upload_image_path),
        ),
    ]

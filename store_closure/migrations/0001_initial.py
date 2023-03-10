# Generated by Django 4.1.2 on 2023-02-14 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Query',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('query_text', models.CharField(max_length=100)),
                ('query_date', models.DateTimeField(verbose_name='date')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='QueryStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('InProgress', 'Query is inProgress'), ('Processed', 'Query is Prossed')], default='InProgress', max_length=20)),
                ('query', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store_closure.query')),
            ],
        ),
        migrations.AddField(
            model_name='query',
            name='query_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store_closure.user'),
        ),
    ]

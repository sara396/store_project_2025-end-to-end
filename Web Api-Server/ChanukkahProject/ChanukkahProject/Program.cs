using AutoMapper;
using BL.Clases;
using BL.Services;
using DAL.Clases;
using DAL.models;
using DAL.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

    #region הזרקות DAL

    builder.Services.AddScoped<IDALCategory, DALCategory>();
    builder.Services.AddScoped<IDALGame, DALGame>();
    builder.Services.AddScoped<IDALBuy, DALBuy>();
    builder.Services.AddScoped<IDALCustomer, DALCustomer>();
    builder.Services.AddScoped<IDALSaleDetail, DALSaleDetail>();
#endregion


    #region הזרקות BL

    builder.Services.AddScoped<IBLCategory, BLCategory>();
    builder.Services.AddScoped<IBLGame, BLGame>();
    builder.Services.AddScoped<IBLCustomer, BLCustomer>();
    builder.Services.AddScoped<IBLBuy, BLBuy>();
    builder.Services.AddScoped<IBLSaleDetail, BLSaleDetail>();



#endregion

builder.Services.AddAutoMapper(typeof(Program));

//הגדרת הDB
builder.Services.AddDbContext<GameStoreContext>
    (Options => Options.UseSqlServer("Data Source=DESKTOP-783IDMP\\SQLEXPRESS;Initial Catalog= GameStore;Integrated Security=True; MultipleActiveResultSets=True; Application Name=EntityFramework"));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();


    //riact-הרשאה חיבור ל
    app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());



}

//להצגת תמונה מתוך תיקיה
//https://localhost:7009/Playmobil=1/img%20police.jpg
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

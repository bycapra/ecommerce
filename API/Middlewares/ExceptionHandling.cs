
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middlewares;

public class ExceptionHandlingMiddleware {

    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;
    private readonly IHostEnvironment _env;
    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger, IHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync (HttpContext context){

        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError("Hata: " + ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 500;

            var response  = new ProblemDetails{
                Status = 500,
                Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                Title = ex.Message
            };

            var jsonOptions = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
            var json = JsonSerializer.Serialize(response,jsonOptions);
            await context.Response.WriteAsync(json);
        }

    }



}
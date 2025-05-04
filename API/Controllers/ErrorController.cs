using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ErrorController : ControllerBase
{

    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest();
    }

     [HttpGet("unauthorized")]
    public IActionResult UnAuthorizedError(){
        return Unauthorized();  
    }

     [HttpGet("validatior-error")]
    public IActionResult ValidationError(){
        ModelState.AddModelError("Validation Error 1","Validation 1 error details");
        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public IActionResult ServerError(){
        throw new Exception("Server error occured!");
    }

}
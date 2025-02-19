using System;

namespace API.Data;

public class DbInitializer
{
  public void InitDb(WebApplication app) 
  {
    using var scope= app.Services.CreateScope();
  }
}

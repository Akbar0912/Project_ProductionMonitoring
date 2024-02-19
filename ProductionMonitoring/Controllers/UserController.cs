using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Profile()
        {
            return View();
        }
    }
}

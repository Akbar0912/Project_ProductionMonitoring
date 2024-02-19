using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}

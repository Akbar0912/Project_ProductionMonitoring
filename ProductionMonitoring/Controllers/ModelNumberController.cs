using Microsoft.AspNetCore.Mvc;

namespace ProductionMonitoring.Controllers
{
    public class ModelNumberController : Controller
    {
        public IActionResult ModelNumber()
        {
            return View();
        }

        public IActionResult Add() 
        {
            return View();
        }
    }
}

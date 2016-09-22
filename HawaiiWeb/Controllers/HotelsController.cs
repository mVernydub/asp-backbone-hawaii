using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HawaiiWeb.Services;

namespace HawaiiWeb.Controllers
{
    public class HotelsController : Controller
    {
        HotelDataService dataService;
        public HotelsController()
        {
            this.dataService = new HotelDataService() ;
        }
        public HotelsController(HotelDataService hotelsService)
        {
           this.dataService = hotelsService;
        }
        // GET: Hotels
        public ActionResult Index()
        {
            return View();
        }
        // GET: Hotels/Search?keyword=*
        public JsonResult Search(string keyWord)
        {
            var hotels = this.dataService.SearchHotels(keyWord);
            return Json(hotels, JsonRequestBehavior.AllowGet);
        }
    }
}
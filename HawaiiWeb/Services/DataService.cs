using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HawaiiWeb.Models;

namespace HawaiiWeb.Services
{
    public class HotelDataService
    {
        List<Hotel> hotels;
        public HotelDataService()
        {
            this.hotels = new List<Hotel>();
            SetHotels();
        }

        private void SetHotels()
        {
            this.hotels.Add(new Hotel("Sea dream hotel", 70, 2, 4));
            this.hotels.Add(new Hotel("Ocean hotel", 170,3, 5));
            this.hotels.Add(new Hotel("Sea cheap hotel", 20, 1, 2));
            this.hotels.Add(new Hotel("Sea hotel", 75, 2, 4));
        }

        public IEnumerable<Hotel> SearchHotels(string keyword)
        {
            keyword = keyword.ToLowerInvariant();
            return this.hotels.Where(h => h.Name.ToLowerInvariant().Contains(keyword));
        }
    }
}
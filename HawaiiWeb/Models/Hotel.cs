using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HawaiiWeb.Models
{
    public class Hotel
    {
        public Hotel(string name, int price, int roomsCount, int stars)
        {
            Id = Guid.NewGuid();
            this.Name = name;
            this.Price = price;
            this.RoomsCount = roomsCount;
            this.Stars = stars;
            this.ShortDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pretium nibh. Suspendisse pharetra interdum eros gravida lacinia. ";
            this.Description = this.ShortDescription + this.ShortDescription;
            this.ImgUrl = "/Content/Images/hotel.jpg";
        }
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public int RoomsCount { get; set; }
        public int Stars { get; set; }
    }
}
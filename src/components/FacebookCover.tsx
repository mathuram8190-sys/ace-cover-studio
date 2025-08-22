import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Shield, Snowflake, Star, Phone, Mail, MapPin, Globe } from "lucide-react";
import hotelRoom from "@/assets/hotel-room.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";

const FacebookCover = () => {
  return (
    <div className="w-full max-w-[851px] h-[315px] mx-auto bg-gradient-subtle overflow-hidden relative">
      {/* Main Content Container */}
      <div className="flex h-full">
        {/* Left Section - Branding & Info (60% space) */}
        <div className="flex-1 p-6 bg-background relative">
          {/* Logo & Brand */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">N</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground">RELIABLE</h1>
            <p className="text-primary font-semibold text-lg">Stay</p>
            <p className="text-muted-foreground text-sm">Big Comfort at Affordable Price</p>
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">Free WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">AC Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">CCTV Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Luxury Comfort</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-primary/10 rounded-lg p-3 mb-4">
            <h3 className="text-sm font-semibold text-primary mb-1">Luxurious Stay With Home Comfortable</h3>
            <p className="text-xs text-muted-foreground">Well Furnished AC Room • Luxury Bed & Matters • Study Table with Lamp & Fan</p>
          </div>
        </div>

        {/* Right Section - Images & Contact (40% space) */}
        <div className="w-80 p-4">
          {/* Property Images */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Card className="overflow-hidden">
              <img 
                src={hotelRoom} 
                alt="Luxury hotel room with AC"
                className="w-full h-20 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img 
                src={hotelExterior} 
                alt="Hotel exterior"
                className="w-full h-20 object-cover"
              />
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="p-3 bg-card">
            <h3 className="font-semibold text-primary text-sm mb-2">Contact Information</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-foreground">9344112403</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-accent-foreground font-bold">W</span>
                </div>
                <span className="text-accent font-medium">7010216681</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-primary" />
                <span className="text-foreground">m.reliable.stay@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-primary mt-0.5" />
                <div className="text-foreground">
                  <div>No.5, Andal Nagar, Second Street</div>
                  <div>Kunnur Road, Krishnankoil</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-primary" />
                <span className="text-primary">mreliablestay.wordpress.com</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
    </div>
  );
};

export default FacebookCover;
"use client"

import { ShoppingBag, Heart, Search, Menu, Crown, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  { name: "Women's Wear", id: "womens-wear" },
  { name: "Women's Bags", id: "womens-bags" },
  { name: "Shoes", id: "shoes" },
  { name: "Men's Bags", id: "mens-bags" },
]

const products = [
  {
    id: 1,
    name: "Elegant Silk Blouse",
    price: 35000,
    category: "womens-wear",
    image: "https://tse1.mm.bing.net/th/id/OIP.oQLL2fA4IzepKuw_1oOyFAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Designer Leather Handbag",
    price: 65000,
    category: "womens-bags",
    image: "https://aodour.oss-ap-southeast-1.aliyuncs.com/globalProduct/2022-01-04/O1CN01Og1SIh20pn9b5zRNJ_!!2208227946899-0-cib.jpg_q60",
    rating: 4.9,
    isNew: false,
  },
  {
    id: 3,
    name: "Classic High Heels",
    price: 45000,
    category: "shoes",
    image: "https://cdn.shopify.com/s/files/1/0293/9277/products/05-21-21Studio5_RT_12-19-02_22_DANNA_Black_0803_NT.jpg?v=1621899515&width=461&height=691&crop=center",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: "Premium Men's Briefcase",
    price: 85000,
    category: "mens-bags",
    image: "https://thevou.com/wp-content/uploads/2023/07/Palissy-Double-by-Carl-Friedrik-01.jpg?height=300&width=250",
    rating: 4.8,
    isNew: false,
  },
  {
    id: 5,
    name: "Floral Summer Dress",
    price: 28000,
    category: "womens-wear",
    image: "https://uk.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",
    rating: 4.6,
    isNew: true,
  },
  {
    id: 6,
    name: "Crossbody Evening Bag",
    price: 38000,
    category: "womens-bags",
    image: "https://img.staticdj.com/d2092e051e3584df3bb76163aff7316c_750x.jpeg?height=300&width=250",
    rating: 4.7,
    isNew: false,
  },
  {
    id: 7,
    name: "Comfortable Sneakers",
    price: 42000,
    category: "shoes",
    image: "https://ae01.alicdn.com/kf/S76f8a6039d0349f4b9561e114b132fc23/New-Shoes-for-Men-Comfortable-Flat-Men-s-Casual-Shoes-Outdoor-Wild-Men-s-Sneakers-High.jpg_.webp?height=300&width=250",
    rating: 4.5,
    isNew: false,
  },
  {
    id: 8,
    name: "Executive Laptop Bag",
    price: 75000,
    category: "mens-bags",
    image: "https://5.imimg.com/data5/HS/BR/MY-46790386/executive-laptop-bag-1000x1000.jpg?height=300&width=250",
    rating: 4.9,
    isNew: true,
  },
]

export default function RegalChicStore() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handlePurchase = (product: (typeof products)[0]) => {
    const message = `Hi! I'm interested in purchasing the ${product.name} for ₦${product.price.toLocaleString()}. Could you please provide more details?`
    const whatsappUrl = `https://wa.me/+2348087501164?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-rose-600" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Regal Chic
                </h1>
                <p className="text-xs text-gray-600">Collection</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`text-sm font-medium transition-colors ${
                  selectedCategory === "all" ? "text-rose-600" : "text-gray-600 hover:text-rose-600"
                }`}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-sm font-medium transition-colors ${
                    selectedCategory === category.id ? "text-rose-600" : "text-gray-600 hover:text-rose-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-64 border-rose-200 focus:border-rose-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="border-rose-200"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === "all" ? "bg-rose-100 text-rose-600" : "hover:bg-gray-100"
                        }`}
                      >
                        All Items
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.id ? "bg-rose-100 text-rose-600" : "hover:bg-gray-100"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
            Elevate Your Style
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium fashion, bags, and accessories that define elegance and
            sophistication.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Collection</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each piece in our collection is carefully selected to bring you the finest in fashion and accessories.
            </p>
          </div>

          {/* Category Filter Pills - Mobile */}
          <div className="flex flex-wrap gap-2 mb-8 md:hidden justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className={
                selectedCategory === "all" ? "bg-rose-600 hover:bg-rose-700" : "border-rose-200 hover:border-rose-400"
              }
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "border-rose-200 hover:border-rose-400"
                }
              >
                {category.name.replace("'s", "")}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-rose-100 hover:border-rose-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-rose-600 hover:bg-rose-700">New</Badge>
                    )}
                    <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-rose-600">₦{product.price.toLocaleString()}</span>
                      <Button
                        onClick={() => handlePurchase(product)}
                        className="bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm"
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-900 to-purple-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-6 w-6" />
                <span className="text-xl font-bold">Regal Chic Collection</span>
              </div>
              <p className="text-rose-100">
                Your destination for premium fashion, bags, and accessories that define elegance.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-rose-100">
                <li>Women's Wear</li>
                <li>Women's Bags</li>
                <li>Shoes</li>
                <li>Men's Bags</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact Us</h5>
              <p className="text-rose-100 mb-2">
                Ready to shop? Click any "Buy Now" button to connect with us on WhatsApp!
              </p>
              <Button
                onClick={() => {
                  const message = "Hi! I'd like to know more about your Regal Chic Collection."
                  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, "_blank")
                }}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-900"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="border-t border-rose-800 mt-8 pt-8 text-center text-rose-100">
            <p>&copy; 2024 Regal Chic Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

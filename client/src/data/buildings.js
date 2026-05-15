export const buildings = [
  // Academic
  { id: 1, code: "JB", name: "Jack H. Brown Hall", category: "academic", lat: 34.1813, lng: -117.3215, description: "Business school, AACSB accredited", hours: "Mon-Fri 7am-10pm", departments: ["Business Administration", "Accounting", "Finance"] },
  { id: 2, code: "PL", name: "John M. Pfau Library", category: "academic", lat: 34.1822, lng: -117.3225, description: "Main library, 4 floors", hours: "Mon-Thu 7:30am-11pm, Fri 7:30am-6pm", departments: ["Library Services", "Research Support"] },
  { id: 3, code: "SH", name: "Sierra Hall", category: "academic", lat: 34.1820, lng: -117.3235, description: "Sciences and social sciences", hours: "Mon-Fri 7am-10pm", departments: ["Psychology", "Sociology", "Biology"] },
  { id: 4, code: "UH", name: "University Hall", category: "academic", lat: 34.1825, lng: -117.3228, description: "Classrooms and lecture halls", hours: "Mon-Fri 7am-10pm", departments: ["General Education", "Lecture Halls"] },
  { id: 5, code: "PS", name: "Physical Sciences", category: "academic", lat: 34.1830, lng: -117.3222, description: "Chemistry and physics labs", hours: "Mon-Fri 7am-9pm", departments: ["Chemistry", "Physics", "Geology"] },
  { id: 6, code: "SB", name: "Social & Behavioral Sciences", category: "academic", lat: 34.18363181199097, lng:  -117.32498715078503, description: "Psychology and sociology building", hours: "Mon-Fri 7am-9pm", departments: ["Psychology", "Criminal Justice"] },
  { id: 7, code: "CE", name: "College of Education", category: "academic", lat: 34.1818, lng: -117.3210, description: "Education programs", hours: "Mon-Fri 8am-8pm", departments: ["Teacher Education", "Counseling"] },

  // Dining
  { id: 8, code: "SU", name: "Santos Manuel Student Union", category: "dining", lat: 34.18127981562727, lng: -117.32371846591634, description: "Main student hub with dining options", hours: "Mon-Fri 7am-11pm", departments: ["Dining Services", "Student Services"] },
  { id: 9, code: "CY", name: "Coyote Spot", category: "dining", lat: 34.1812, lng: -117.3218, description: "Quick bites and coffee", hours: "Mon-Fri 7:30am-4pm", departments: ["Dining"] },
  { id: 10, code: "QD", name: "Quad Dining", category: "dining", lat: 34.1816, lng: -117.3222, description: "Outdoor dining at the quad", hours: "Mon-Fri 10am-3pm", departments: ["Dining"] },

  // Parking
  { id: 11, code: "PK1", name: "Parking Structure West", category: "parking", lat: 34.1830, lng: -117.3245, description: "Multi-level parking structure", hours: "24/7", departments: ["Parking Services"] },
  { id: 12, code: "PK2", name: "Parking Structure East", category: "parking", lat: 34.1830, lng: -117.3205, description: "Multi-level parking structure", hours: "24/7", departments: ["Parking Services"] },
  { id: 13, code: "PL1", name: "Parking Lot B", category: "parking", lat: 34.1800, lng: -117.3230, description: "Surface parking lot", hours: "24/7", departments: ["Parking Services"] },

  // Health
  { id: 14, code: "HC", name: "Student Health Center", category: "health", lat: 34.1810, lng: -117.3242, description: "Medical clinic and counseling services", hours: "Mon-Fri 8am-5pm", departments: ["Medical Clinic", "Counseling", "Pharmacy"] },
  { id: 15, code: "RF", name: "Student Rec & Wellness Center", category: "health", lat: 34.1795, lng: -117.3225, description: "Gym, pool and fitness center", hours: "Mon-Fri 6am-10pm, Sat-Sun 8am-8pm", departments: ["Fitness", "Aquatics", "Wellness"] },
  { id: 16, code: "HP", name: "Health & PE Complex", category: "health", lat: 34.1800, lng: -117.3218, description: "Coussoulis Arena and gym facilities", hours: "Mon-Fri 7am-9pm", departments: ["Kinesiology", "Athletics"] },

  // Admin
  { id: 17, code: "AD", name: "Administration Building", category: "admin", lat: 34.1817, lng: -117.3230, description: "Main admin, President's office", hours: "Mon-Fri 8am-5pm", departments: ["President's Office", "Provost", "Finance"] },
  { id: 18, code: "UP", name: "University Police", category: "admin", lat: 34.1835, lng: -117.3238, description: "Campus police and emergency services", hours: "24/7", departments: ["Campus Safety", "Emergency Services"] },
  { id: 19, code: "YC", name: "Yasuda Center", category: "admin", lat: 34.1840, lng: -117.3230, description: "Extended learning and conferences", hours: "Mon-Fri 8am-6pm", departments: ["Extended Learning"] },
  { id: 20, code: "IC", name: "Information Center", category: "admin", lat: 34.1845, lng: -117.3232, description: "Main gate visitor info kiosk", hours: "Mon-Fri 7am-6pm", departments: ["Visitor Services"] },

  // Recreation
  { id: 21, code: "VA", name: "Visual Arts Center / RAFFMA", category: "recreation", lat: 34.1805, lng: -117.3212, description: "Art gallery and museum", hours: "Tue-Sat 10am-5pm", departments: ["Art Gallery", "RAFFMA Museum"] },
  { id: 22, code: "PA", name: "Performing Arts / Theatre", category: "recreation", lat: 34.1802, lng: -117.3215, description: "Theatre and recital hall", hours: "Mon-Fri 9am-6pm", departments: ["Theatre", "Music", "Dance"] },
  { id: 23, code: "CA", name: "Coussoulis Arena", category: "recreation", lat: 34.1798, lng: -117.3220, description: "Main sports arena for CSUSB Coyotes", hours: "Event days only", departments: ["Athletics", "Events"] },
];

export const categories = [
  { id: "all", label: "All", icon: "🏫", color: "bg-gray-500" },
  { id: "academic", label: "Academic", icon: "📚", color: "bg-cody-blue" },
  { id: "dining", label: "Dining", icon: "🍕", color: "bg-orange-500" },
  { id: "parking", label: "Parking", icon: "🅿️", color: "bg-gray-600" },
  { id: "health", label: "Health", icon: "💊", color: "bg-green-600" },
  { id: "admin", label: "Admin", icon: "🏛️", color: "bg-purple-600" },
  { id: "recreation", label: "Recreation", icon: "⚽", color: "bg-red-500" },
];

export const categoryColors = {
  academic: "#003087",
  dining: "#f97316",
  parking: "#6b7280",
  health: "#16a34a",
  admin: "#9333ea",
  recreation: "#ef4444",
};
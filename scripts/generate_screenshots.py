from pathlib import Path

W, H = 1440, 900
BG = '#f5f7fb'


def text(x,y,t,size=20,weight='normal',fill='#111827'):
    return f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{weight}" fill="{fill}">{t}</text>'

def rect(x,y,w,h,fill='#fff',stroke='#e5e7eb',rx=8):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" rx="{rx}"/>'

def save(name, body):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}">
<rect width="100%" height="100%" fill="{BG}"/>
{body}
</svg>'''
    Path('screenshots').mkdir(exist_ok=True)
    Path(f'screenshots/{name}.svg').write_text(svg)

# 1 local business
b=[]
b += [rect(80,30,1280,60,'#ffffff'), text(110,68,'Sri Durga Electrical Services',28,'700'), text(950,68,'Services   About   Contact',20,'normal','#374151')]
b += [rect(80,110,1280,180,'#ffffff'), text(110,175,'Trusted Electricians for Homes & Shops',46,'700'), text(110,225,'Fast response, clear pricing, and safe electrical work.',24,'normal','#4b5563')]
b += [rect(920,145,390,115,'#eff6ff','#bfdbfe'), text(945,190,'Call for Immediate Service',24,'700','#1d4ed8'), text(945,235,'+91 98765 43210',40,'700')]
b += [text(90,350,'Our Services',36,'700'), rect(80,370,1280,170,'#ffffff')]
services=['• Home wiring and rewiring','• MCB and DB board installation','• Fan, light, and switch repairs','• Inverter and UPS connection','• Commercial electrical maintenance']
for i,s in enumerate(services):
    b.append(text(115,420+i*28,s,24))
b += [rect(80,570,620,250,'#ffffff'), rect(740,570,620,250,'#ffffff'), text(105,620,'About Us',34,'700'), text(105,665,'Serving families and small businesses for 12+ years.',22,'normal','#4b5563'), text(105,700,'We focus on safety, quality materials, and on-time work.',22,'normal','#4b5563'), text(765,620,'Contact',34,'700'), text(765,665,'Address: 2nd Main Road, Vijay Nagar',22), text(765,700,'Phone: +91 98765 43210',22), text(765,735,'Email: sridurgaelectrical@gmail.com',22)]
save('sri-durga-electrical-services', '\n'.join(b))

# 2 real estate
b=[]
b += [rect(60,25,1320,65,'#ffffff'), text(95,67,'Premium Plots & Villas',30,'700'), rect(1180,40,160,35,'#2563eb','#2563eb',6), text(1220,63,'Book Visit',21,'700','#ffffff')]
b += [text(70,145,'Find Your Next Property with Confidence',44,'700'), text(70,185,'Verified listings for gated community plots and ready-to-move villas.',23,'normal','#4b5563')]
card_w=410
for i,(title,meta,price,tag,color) in enumerate([
    ('Green Meadows Villa','3 BHK · 2,150 sq.ft · Whitefield','₹1.25 Cr','Villa','#dbeafe'),
    ('Sunrise Residency Plot','40x60 · Approved Layout · Sarjapur','₹78 Lakh','Plot','#dcfce7'),
    ('Lakeview Premium Villa','4 BHK · 2,850 sq.ft · Devanahalli','₹1.68 Cr','Villa','#fee2e2')]):
    x=60+i*(card_w+25)
    b += [rect(x,230,card_w,560,'#ffffff'), rect(x+15,248,card_w-30,220,color,'#e5e7eb',5), text(x+25,500,tag,20,'700','#1d4ed8'), text(x+25,535,title,30,'700'), text(x+25,570,meta,20,'normal','#4b5563'), text(x+25,615,price,34,'700'), rect(x+25,640,card_w-50,46,'#0f766e','#0f766e',6), text(x+160,671,'Book Visit',22,'700','#ffffff')]
b += [text(62,845,'RERA Registered | Property Visits Available 7 Days a Week',20,'normal','#6b7280')]
save('premium-plots-villas', '\n'.join(b))

# 3 coaching
b=[]
b += [rect(70,28,1300,60,'#ffffff'), text(100,68,'Top Coaching Institute',30,'700'), text(1030,68,'Courses   Results   Contact',20,'normal','#374151')]
b += [rect(70,110,1300,160,'#ffffff'), text(100,175,'Build Strong Fundamentals. Get Top Results.',44,'700'), text(100,220,'Trusted by parents for disciplined teaching and regular test practice.',23,'normal','#4b5563')]
b += [text(80,330,'Courses',34,'700')]
for i,(title,desc) in enumerate([
    ('Class 8-10 Foundation','Maths, Science, and Olympiad weekly tests.'),
    ('NEET Long Term','PCB preparation with chapter tests.'),
    ('IIT-JEE Main + Advanced','Concept-first classes and problem-solving practice.')]):
    x=70+i*435
    b += [rect(x,350,420,160,'#ffffff'), text(x+18,395,title,26,'700'), text(x+18,435,desc,20,'normal','#4b5563')]
b += [rect(70,540,1300,150,'#ffffff'), text(95,585,'Results',34,'700'), rect(95,605,390,70,'#f3f4f6','#e5e7eb'), rect(525,605,390,70,'#f3f4f6','#e5e7eb'), rect(955,605,390,70,'#f3f4f6','#e5e7eb'), text(120,648,'96% students scored above 80%',22), text(555,648,'42 NEET selections in 2025',22), text(985,648,'31 JEE 95+ percentile',22)]
b += [rect(70,715,1300,160,'#ffffff'), text(95,758,'Contact Form',32,'700')]
for i,field in enumerate(['Student Name','Parent Phone','Select Course','Preferred Batch']):
    x=95+(i%2)*620
    y=775+(i//2)*40
    b += [rect(x,y,580,32,'#ffffff','#d1d5db',4), text(x+12,y+23,field,17,'normal','#9ca3af')]
b += [rect(95,855,1180,16,'#2563eb','#2563eb',4)]
save('top-coaching-institute', '\n'.join(b))
print('generated svg screenshots')

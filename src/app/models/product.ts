import { Price, Unit } from "./price";
import { Deserializable } from "./deserializable";

export class Product implements Deserializable {
  id: string;
  name: string;
  thc: string;
  category: string;
  description1: string;
  description2: string;
  additionalInfo: string;
  photo: string;
  prices: Price[] = new Array();
  stars: number

  deserialize(input: any): this {
    Object.assign(this, input);
    this.prices = input.prices.map((price: Price) => new Price().deserialize(price));
    return this;
  }
}

export const PRODUCTS: Product[] = [
  {
    id: 'ak-47', name: 'AK 47', photo: 'assets/img/products/AK47.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "AK-47 is a 65% Sativa-dominate hybrid with bright white coloring. Despite its violent name, the strain imparts a very mellow feeling and can even leave one stuck in a state of “couch lock”. It also leads to increased creativity. For the most part, however, AK-47 will leave you feeling uplifted, peaceful and euphoric. Many people enjoy using it while listening to music. Outside of dry mouth and eyes, the strain can also cause users to feel paranoid and sometimes dizzy. Some users also experience minor headaches.Many users take advantage of the strain’s relaxing effect to relieve stress and anxiety",
    description2: " Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.",    additionalInfo: ""
  } as Product,
  {
    id: 'gelato', name: 'Gelato', photo: 'assets/img/products/gelato.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Gelato is a slightly indica dominant hybrid (55% indica/45% sativa) strain created through a cross of the infamous Sunset Sherbet X Thin Mint Girl Scout Cookies strains. This dank bud is infamous for its insanely delicious flavor and hugely powerful effects that are fueled by a THC level that hits its low point at 20% on average.", description2: "Blueberry Kush is a strong indica strain that slowly brings on a heavy body sensation, helping patients forget their pain and relax. Originally from Oregon, this strain is a hybrid of Blueberry andS OG Kush, which is evident in its fresh berry aroma with notes of earthy herbalness. This indica is best for evenings or before bed.",
    additionalInfo: "Gelato is a slightly indica dominant hybrid (55% indica/45% sativa) strain created through a cross of the infamous Sunset Sherbet X Thin Mint Girl Scout Cookies strains. This dank bud is infamous for its insanely delicious flavor and hugely powerful effects that are fueled by a THC level that hits its low point at 20% on average. Gelato has a flavor that’s said to be much like a sweet sherbet, with fruity blueberry and orange flavors. The aroma is just as sickly sweet, with a lavender citrus berry bouquet that has a woody effect as the nugs are broken apart and smoked. Although it has a tasty flavor, Gelato is definitely best-loved for its effects. Even with its slight indica dominance, the high is head heavy in nature and won’t leave you sedated or couch-locked. It starts with a cerebral head rush that hits you in the forehead with an uplifted euphoria and a sense of slightly focused energy. As this head high blissfully builds, a creeping body buzz will slowly wash over you, leaving you completely relaxed and calm with a sense of peace and well-being. These powerful and surprisingly well-balanced effects make Gelato the perfect choice for patients suffering from muscle spasms, chronic pain, inflammation, chronic fatigue, and headaches or migraines. Gelato buds have large and lumpy super dense grape-shaped dark forest green nugs with rich purple and orange hairs and a super sticky coating of visible resin droplets."
  } as Product,
  {
    id: 'thunder-bloody-mary', name: 'Thunder Bloody Mary', photo: 'assets/img/products/t-bloody-mary.jpg',
    category: "strain",
    thc: "21% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Thunder Bloody Mary cannabis strain by Samsara Seeds is an autoflowering, Indica dominant hybrid with a potent 21% THC. It grows quickly and with an excellent quality, offering high yei.ds It retains the typical Afghan and hash aroma and flavour. Ideal for evening usage.",
    additionalInfo: "Thunder Bloody Mary cannabis strain by Samsara Seeds is an autoflowering, Indica dominant hybrid with a potent 21% THC. It grows quickly and with an excellent quality, offering high yei.ds It retains the typical Afghan and hash aroma and flavour. Ideal for evening usage."
  } as Product,
  {
    id: 'cannabis-distillate', name: 'Cannabis Distillate', photo: 'assets/img/products/distilate.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "1L First Pass Distillate", amount: 4000 }, { unit: "1L Second Pass Distillate", amount: 5000 }, { unit: "1L Water Clear Distillate", amount: 6000 }],
    description1: "Distillate is the base ingredient of most Edibles and Vape Cartridges, and typically lacks any flavor, taste or aroma. It’s a potent cannabis oil that can be used on its own or infused in other cannabis products or goods. The most common forms of distillate on the market are THC oil and CBD oil. The name of the oil indicates the most prominent cannabinoid. In the case of CBD oil, CBD would be the most prominent cannabinoid. The name “distillate” refers to the distillation process that removes and separates the cannabinoids, such as THC or CBD, into their individual portions.",
    additionalInfo: "Distillate is extremely potent, though it lacks the terpenes, or naturally occurring flavors and aromas, of the cannabis plant. One benefit of having the natural terpenes removed is being able to have complete control over the final product’s taste and smell. A drawback of removing terpenes is that without them, Distillates may lack the therapeutic benefits commonly attributed to the entourage effect. Terpenes can be added back into distillate, though it’s been theorized that any medicinal advantages are reduced by their initial removal."
  } as Product,
  {
    id: 'blueberry', name: 'Blueberry', photo: 'assets/img/products/blueberry.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Blueberry Kush is a strong indica strain that slowly brings on a heavy body sensation, helping patients forget their pain and relax. Originally from Oregon, this strain is a hybrid of Blueberry and OG Kush, which is evident in its fresh berry aroma with notes of earthy herbalness. This indica is best for evenings or before bed",
    description2: "Blueberry Kush is a strong indica strain that slowly brings on a heavy body sensation, helping patients forget their pain and relax. Originally from Oregon, this strain is a hybrid of Blueberry andS OG Kush, which is evident in its fresh berry aroma with notes of earthy herbalness. This indica is best for evenings or before bed.",
    additionalInfo: "Dosage should be individualized according to the therapeutic needs and response of the patient. ADDERALL XR® should be administered at the lowest effective dosage. In children with ADHD who are 6 years of age and older and are either starting treatment for the first time or switching from another medication, start with 10 mg once daily in the morning. Daily dosage may be adjusted in increments of 5 mg or 10 mg at weekly intervals. When in the judgement of the clinician a lower initial dose is appropriate, patients may begin treatment with 5 mg once daily in the morning. The maximum recommended dose for children is 30 mg a day; doses greater than 30 mg a day of the drug have not been studied in children. Amphetamines are not recommended for children under 3 years of age. ADDERALL XR™ has not been studied in children under 6 years of age. In adults with ADHD who are either starting treatment for the first time or switching from another medication, the recommended dose is 20 mg/day."
  } as Product,
  {
    id: 'blue-dream', name: 'Blue Dream', photo: 'assets/img/products/blue.jpg',
    category: "strain",
    thc: "19.3% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Blue Dream, also known as Blueberry Haze, is a sativa-dominant hybrid strain of Cannabis. Blue Dream is a cross between theBlueberry and Haze strains, and was created around 2003 in Santa Cruz, Colorado.[1] Its more remote ancestry includes Afghani, Thai, and Mexican strains. It is a clone-only strain propagated by cuttings, and is known for producing large harvests, as much as seven ounces per plant. Widely used for medical purposes, as of 2014 samples were testing at up to 25% THC and 2% CBD content. Blue Dream is high in terpenes as well, particularly alpha-Pinene, which is a bronchodilator and an antibiotic",
    description2: "Blue Dream is one of the most popular strains in the United States. This sativa-dominant hybrid is easy to grow and cultivate. One does not have to be an expert to grow cannabis from Blue Dream seeds. It can be grown both indoors and outdoors, and the plants reach up to 67 inches in height (roughly about 6 feet). However, they are vulnerable to a number of factors if grown outdoors, including extreme weather changes, temperature swings, and pests such as red spider mite. That’s why most people prefer to grow Blue Dream indoors. The expected yield in plants grown indoors and outdoors is similar. For example, a plant grown outdoors is expected to yield about 21 ounces per plant while an indoor growing should produce about 22 ounces on average. Even though the plant thrives in cold temperatures, the ideal range is between 65 and 85 degrees Fahrenheit.",
    additionalInfo: ""
  } as Product,
  {
    id: 'brass-knuckles', name: 'Brass Knuckles', photo: 'assets/img/products/brass-knuckles.jpg',
    category: "vape",
    thc: "",
    stars: 4,
    prices: [{ unit: "7 Napalm OG Cartridge", amount: 140 }, { unit: "7 Abracadabra Cartridge", amount: 140 }, { unit: "7 Connected Cartridge", amount: 140 }, { unit: "7 Tahoe OG Cartridge", amount: 140 }],
    description1: "Knuckle up! When it comes to Super Premium CO2 oil products, Brass Knuckles reigns supreme. Renowned for their fire grams and oil cartridges that are known for flavor and potency, Brass Knuckles delivers when it comes to providing consumers top shelf product and ending prohibition. Real purity. Real integrity. No nonsense. No bullshit.",
    description2: "Knuckle up! When it comes to Super Premium CO2 oil products, Brass Knuckles reigns supreme. Renowned for their fire grams and oil cartridges that are known for flavor and potency, Brass Knuckles delivers when it comes to providing consumers top shelf product and ending prohibition. Real purity. Real integrity. No nonsense. No bullshit. Whether it's concentrates, cartridges, or batteries, one thing is absolutely clear: Brass Knuckles ain’t fucking around. Brass Knuckles speaks to true concentrate connoisseurs by mastering the art of extraction, exclusively using top-shelf cannabis strains. All of their products are lab tested to ensure they’re delivering the high-quality products patients deserve. Available in Sativa, Indica, and Hybrid, Brass Knuckles works with top strains including Gorilla Glue, Girl Scout Cookies, Jack Herer, and more. Brass Knuckle cartridges offer a full gram of super premium concentrate for the ultimate flavor experience and the most potent THC available. 510 thread and made with superior Quartz, Brass Knuckle cartridges are in a class of their own. Brass Knuckles - empower the people!",
    additionalInfo: ""
  } as Product,
  {
    id: 'cannabis-oil', name: 'Cannabis Oil', photo: 'assets/img/products/cannabis-oil.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "250mg", amount: 260 }],
    description1: "Cannabis essential oil is one of the most unusual [1] oils in the essential oil range, simply because of the plant from which it is derived. Although cannabis and hemp have been used for thousands of years as naturally growing herbs, their reputation as a drug in many parts of the world has complicated the relationship between users of cannabis and hemp, and authorities in certain places. The most important health benefits of cannabis essential oil include its ability to protect your skin, reduce stress and anxiety, improve the quality of sleep, boost appetite, optimize digestion, reduce pain, prevent certain cancers, and protect heart health.",
    description2: "The most important health benefits of cannabis essential oil include its ability to protect your skin, reduce stress and anxiety, improve the quality of sleep, boost appetite, optimize digestion, reduce pain, prevent certain cancers, and protect heart health. However, cannabis essential oil is a beneficial essential oil and is widely considered as one of the most effective oils for the alleviation of certain illnesses and conditions. It is extracted by steam distillation from the flowers and upper leaves of cannabis plants, which are in the Cannabis genus.",
    additionalInfo: ""
  } as Product,
  {
    id: 'cbd-250', name: 'CBD Oil 250Mg', photo: 'assets/img/products/cbd-2.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "250 mg", amount: 250 }],
    description1: "Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive.",
    description2: "Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive. This quality makes CBD an appealing option for those who are looking for relief from pain and other symptoms without the mind-altering effects of marijuana or certain pharmaceutical drugs. CBD oil is made by extracting CBD from the cannabis plant, then diluting it with a carrier oil like coconut or hemp seed oil. It’s gaining momentum in the health and wellness world, with some scientific studies confirming it may help treat a variety of ailments like chronic pain and anxiety.",
    additionalInfo: ""
  } as Product,
  {
    id: 'cbd-350', name: 'CBD Oil 350Ml', photo: 'assets/img/products/cbd-1.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "350 Ml", amount: 350 }],
    description1: "Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive.",
    description2: "Cannabidiol is a popular natural remedy used for many common ailments. Better known as CBD, it is one of the 104 chemical compounds known as cannabinoids found in the cannabis or marijuana plant, Cannabis sativa (1). Tetrahydrocannabinol (THC) is the main psychoactive cannabinoid found in cannabis, and causes the sensation of getting “high” that’s often associated with marijuana. However, unlike THC, CBD is not psychoactive. This quality makes CBD an appealing option for those who are looking for relief from pain and other symptoms without the mind-altering effects of marijuana or certain pharmaceutical drugs. CBD oil is made by extracting CBD from the cannabis plant, then diluting it with a carrier oil like coconut or hemp seed oil. It’s gaining momentum in the health and wellness world, with some scientific studies confirming it may help treat a variety of ailments like chronic pain and anxiety.",
    additionalInfo: ""
  } as Product,
  {
    id: 'chemdawg', name: 'ChemDawg (Chem Dog)', photo: 'assets/img/products/chemdawg.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Chemdawg is a legendary strain with an uncertain genetic history. While it is thought to be crossed from Thai and Nepalese sativa landraces by U.S. breeders, many have laid claim to this strain’s creation. Chemdawg’s origin stories include one account of a complicated seed exchange among fellow growers at a Grateful Dead concert and another tale pinning the strain’s parentage on a Colorado strain called Dog Bud (so named for its tendency to make the smoker roll over like a dog). Whatever its beginnings, Chemdawg has become a staple in the U.S. cannabis market for its unique taste and upbeat, energetic high. It has also been used to crossbreed several popular and successful strains. Chemdawg’s THC content has been measured at between 15% and 20%",
    description2: "Chemdawg is one of those marijuana strains that can really space you out for hours on end, only to snap back into reality and wonder how much time just past. What feels like hours is really a couple of minutes. The Chem Dawg strain has such a pungent stench and gassy flavor profile… It’s both disgusting and phenomenal at the same time. It shares a very similar terpene profile to Sour Diesel, at least in my personal experience as a medical marijuana patient. There are always very memorable smoke sessions with this strain. Great for managing mental disorders such as chronic stress, anxiety, PTSD, and migraines, the Chemdawg strain is becoming increasingly popular among medical marijuana patients in Colorado, Colorado, and Washington state. The high from Chemdawg hits quickly, sometimes before users have had a chance to finish appreciating its distinctive diesel aroma. Smokers may experience a sharpening of the senses and an increased hyper-awareness of their surroundings. This initially disorienting head high becomes more productively cerebral and introspective in the right set and setting. Chemdawg can lend itself to exuberant conversation. Its ability to amplify sensory experiences also makes it particularly good for creative endeavors. Many users report a palpable sense of physical relaxation -- although nothing near couchlock -- leading to some speculation that Chemdawg has some indica in its genetics as well. Chemdawg’s strong cerebral high has made it valuable in treating some of the symptoms associated with stress, anxiety, and even PTSD. Some fans of the strain describe relief from chronic pain and migraines as well. Because of its potency and mental focus, Chemdawg has the potential to trigger the kind of manic, recursive thinking that can lead to paranoia. As such, even users with a high tolerance for THC are advised to moderate their intake accordingly.",
    additionalInfo: ""
  } as Product,
  {
    id: 'golden-teacher-mushroom', name: 'Golden Teacher Mushroom', photo: 'assets/img/products/golden-teacher.jpeg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{unit: 'Half Ounce (15 grams)', amount: 150}, {unit: 'Ounce (28 grams)', amount: 240}, {unit: 'Quarter Pound (114 grams)', amount:630 }, {unit: 'Half Pound (227 grams)', amount: 920}, {unit: 'Pound (454 grams)', amount: 1350}],
    description1: "Fresh Golden Teacher Mushrooms Buy Fresh Golden Teacher Mushrooms straight from our farm. The Golden Teacher mushroom strain is among the most popular psychedelic fungi, highly sought by shroomers and growers alike.",
    description2: "",
    additionalInfo: ""
  } as Product,
  {
    id: 'edibles-cereals', name: 'Fruity Krispy Treat 350mg', photo: 'assets/img/products/edibles-cereals.jpg',
    category: "edible",
    thc: "",
    stars: 4,
    prices: [{ unit: "350mg", amount: 20 }, { unit: Unit.two, amount: 260 }, { unit: Unit.three, amount: 662 }, { unit: Unit.four, amount: 962 }, { unit: Unit.five, amount: 1862 }],
    description1: "Enjoyable Edibles’ Fruity Krispy Treats are the fun marshmallowy snacks you’ve been wanting! When it comes to fun and fruity medicating, no one does it better than Enjoyable Edibles. Made with Fruity Dyno-Bites and premium medical cannabis, these medicinal crispies are both delicious and effective. Handcrafted with pure, solvent-less cannabis and containing 350mg of THC, enjoy with extreme caution if you’re a newcomer to medicinal edibles. Fun and easy, Enjoyable Edibles make this Fruity Krispy Treats with cannabis and love",
    description2: "Fruity Krispy has never been so good 350mg",
    additionalInfo: ""
  } as Product,
  {
    id: 'gummy-bears-eddibles', name: 'Gummy Bears - 500mg', photo: 'assets/img/products/gummy-bears.jpeg',
    category: "edible",
    thc: "",
    stars: 4,
    prices: [{ unit: "500mg", amount: 80 }],
    description1: "Available in assorted flavors (typically come in gummy bears or gummy worms/rings)! They are 500 mg THC and pack a good punch in a delicious gummy candy. If you are looking for a delicious, sweet infused candy gummy snack with a HIGH DOSE of THC (500mg) this is it!",
    description2: "Medical use only, keep out of reach of children.",
    additionalInfo: ""
  } as Product,
  {
    id: 'exotic-carts', name: 'Exotic Carts', photo: 'assets/img/products/exotic-carts.jpg',
    category: "vape",
    thc: "",
    stars: 4,
    prices: [{ unit: "5 Cart", amount: 100 }],
    description1: "Buy best grade exortic carts here. Vape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridgeVape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridge",
    description2: "Vape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridgeVape pens are a type of vaporizer designed specifically to vaporize cannabis distillates and oils. They are called pens because the design of the vape device closely resembles that of a traditional pen. A vape pen consists of two pieces: a battery and cartridge",
    additionalInfo: ""
  } as Product,
  {
    id: 'forbidden-fruit', name: 'Forbidden Fruit', photo: 'assets/img/products/t-forbidden-fruit.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Forbidden Fruit is the mouthwatering cross of Cherry Pie x Tangie. This sumptuous genetic cross expresses a beautiful dense bud structure with deep purple hues, dark green foliage, and wiry orange hairs. The terpene profile is a perfect mixture of Cherry Pie’s musky, sweet cherry undertones and Tangie’s loud tropical flavors. There are also notes of pine, mango, and passionfruit candy. The effects hit hard between the eyes and lay into the body with each hit. Forbidden Fruit’s deep physical relaxation and mental stoniness make it perfect for dulling minor physical discomfort and discarding stress.",
    description2: "Forbidden Fruit medical cannabis can reach THC levels of up to 25 percent. This bounty of THC gives it incredible pain fighting power. Many ailments have been recognized as benefiting from treatment with medical cannabis such as Forbidden Fruit marijuana. Some of these ailments are the result of inflammation in the body. One condition in which inflammation attack the myelin sheath surrounding neurons is called Multiple Sclerosis. Symptoms appear depending on what part of the nervous system may have been attacked. Often, this inflammation results in pain. Some sufferers describe their feet feeling as if it is on fire. Many sufferers have tried medical marijuana and attest to the positive effects it has in relieving pain caused by the disorder. Not only does it banish pain, it also reduces inflammation in the body which causes the pain in the first place. Forbidden Fruit marijuana is also useful in other inflammatory conditions such as arthritis and Carpal Tunnel Syndrome. Forbidden Fruit marijuana can also address neuropathic pain. This is also pain which results from damage in the nervous system. Shingles is a type of illness caused by damage to the nervous system done by the chicken pox virus. Medical marijuana can help address the sharp and burning pain caused by small lesions that occur due to the virus which is dormant in most people. Other types of neuropathic pain which may respond to treatment with medical marijuana include diabetic polyneuropathy pain, fibromyalgia, and CFS pain.",
    additionalInfo: ""
  } as Product,
  
  {
    id: 'girls-scout', name: 'Girls Scout', photo: 'assets/img/products/t-girls-scout.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Girl Scout Cookies is an indica-dominant hybrid with a strong sativa component (40:60 sativa/indica ratio). This strain can reach THC levels of up to 28%, meaning it's one of the most potent strains available to medical marijuana patients. This strain provides the best aspects of both sativa and indica, and the high is powerful, happy, and euphoric, but with couch-lock body effects and feelings of lethargy.",
    description2: "Girl Scout Cookies is an indica-dominant hybrid with a strong sativa component (40:60 sativa/indica ratio). This strain can reach THC levels of up to 28%, meaning it's one of the most potent strains available to medical marijuana patients. This strain provides the best aspects of both sativa and indica, and the high is powerful, happy, and euphoric, but with couch-lock body effects and feelings of lethargy. Girl Scout Cookies tastes sweet and earthy, and it smells much the same. It's most effective at treating anxiety, stress, and depression, though it's also good for appetite. Dry mouth is the only likely adverse effect, though others are possible. This strain began as a crossbreed of OG Kush and a near-even hybrid; (Durban Poison X F1). Girl Scout Cookies first appeared in Colorado and is now one of the most popular strains in North America, where sells best on the West Coast and in Michigan. The high lasts for hours, making Girl Scout Cookies a good deal in most places. It can be difficult to grow, but it's fast becoming a staple among home cultivators.",
    additionalInfo: ""
  } as Product,
  {
    id: 'god-gift', name: "God's Gift", photo: 'assets/img/products/t-god-gift.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "A strain that became popular in Colorado dispensaries in 2005, God's Gift contains flavors of grape, citrus, and hash. Its parents are Granddaddy Purple and OG Kush. No matter what your belief system, this strain is a \"gift\" with its strong THC content of 18-22%. Its flowering time usually takes approximately 8-9 weeks.",
    description2: "A strain that became popular in Colorado dispensaries in 2005, God's Gift contains flavors of grape, citrus, and hash. Its parents are Granddaddy Purple and OG Kush. No matter what your belief system, this strain is a",
    additionalInfo: ""
  } as Product,
  {
    id: 'golden-goat', name: "Golden Goat", photo: 'assets/img/products/t-golden-goat.jpg',
    category: "strain",
    thc: "19% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Golden Goat was created by accident in Topeka, Kansas, when a male Hawaiian-Romulan pollinated Mr. Dank's Island Sweet Skunk mother. The strain is often light green and pink in color, which is indicative of its Hawaiian sativa side. The scent is described as being a combination of sweet, sour, and spicy, with a tropical fruit flavor. Effects are strong and felt from head to toe, lasting about 1-2 hours. Flowering time is 9-11 weeks, with a golden appearance closer to harvest. This sativa-dominant hybrid has a THC level of up to 23% and a CBD of 1.07%.",
    description2: "This strain exhibits heavy, potent sativa effects that can be a little much for the anxiety-prone at times, with a racing heart, buzzing body, and near-frenzied thought patterns. For those who like racier sativas, it will provide a wonderful creative and social boost, seemingly making it impossible to sit down at times. It's a strain that works best on a sunny day with friends rather than a night home alone. The Romulan element adds a quality pain reduction and muscle tension relief element that seems to kick in most strongly later in the duration, making the body more able to keep up with the brain's demands.",
    additionalInfo: ""
  } as Product,
  {
    id: 'grand-daddy', name: 'Grand Daddy', photo: 'assets/img/products/t-grand-dady.jpg',
    category: "strain",
    thc: "18.5% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Grand Daddy Purple (aka Grand Daddy Purps) is one of the most popular Indica strains on the west coast and is perhaps the most well known 'purple' cannabis strain in the US. Created back in 2003 by Ken Estes in the San Francisco Bay Area, Ken and his team sought out to create the ultimate Indica hybrid by merging two strains with fantastic genetics - Purple Urkle and Big Bud. The product of these two, Grand Daddy Purple, is a spitting image of it's parents' two best qualities - the deep and dark purple hue from Purple Urkle and the overgrown, dense buds of Big Bud. The dark purple buds blend well with the bright orange hairs and frosted white trichomes that generously cover the bud making it an extremely photogenic strain.",
    description2: "Grand Daddy Purple (aka Grand Daddy Purps) is one of the most popular Indica strains on the west coast and is perhaps the most well known 'purple' cannabis strain in the US. Created back in 2003 by Ken Estes in the San Francisco Bay Area, Ken and his team sought out to create the ultimate Indica hybrid by merging two strains with fantastic genetics - Purple Urkle and Big Bud. The product of these two, Grand Daddy Purple, is a spitting image of it's parents' two best qualities - the deep and dark purple hue from Purple Urkle and the overgrown, dense buds of Big Bud. The dark purple buds blend well with the bright orange hairs and frosted white trichomes that generously cover the bud making it an extremely photogenic strain",
    additionalInfo: ""
  } as Product,
  {
    id: 'grape-ape', name: 'Grape Ape', photo: 'assets/img/products/t-grape-ape.jpg',
    category: "strain",
    thc: "18.5% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Grape Ape, propagated by Apothecary Genetics and Barney’s Farm, is a mostly indica strain that crosses Mendocino Purps, Skunk, and Afghani. Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. Its dense, compact buds are wreathed in deep purple leaves which darken as this indica reaches full maturation following its 7 to 8 week flowering time.",
    description2: "Grape Ape, propagated by Apothecary Genetics and Barney’s Farm, is a mostly indica strain that crosses Mendocino Purps, Skunk, and Afghani. Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety. Its dense, compact buds are wreathed in deep purple leaves which darken as this indica reaches full maturation following its 7 to 8 week flowering time.",
    additionalInfo: ""
  } as Product,
  {
    id: 'green-crack', name: 'Green Crack', photo: 'assets/img/products/t-green-crack.jpg',
    category: "strain",
    thc: "17.5% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression",
    description2: "Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression. Green Crack has branched into two genetic lineages, the most common of which is its sativa line descended from Skunk #1. The 75% indica variety of Green Crack is said to have come from an Afghani strain, and is marked by a tighter bud structure. Because its name perpetuates a negative image of cannabis, some people have taken to calling this strain Cush (with a ‘C’) or Green kush instead",
    additionalInfo: ""
  } as Product,
  {
    id: 'gushers', name: 'Gushers', photo: 'assets/img/products/t-gushers.jpg',
    category: "strain",
    thc: "25% THC",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 270 }, { unit: Unit.two, amount: 550 }, { unit: Unit.three, amount: 1000 }, { unit: Unit.four, amount: 1500 }],
    description1: "Though the name is reminiscent of a gummy-gooey snack packed in your lunch as a kid, the genetics are far from elementary. Parent strain Gelato #41 comes from Cookie family’s genetics of Girl Scout Cookie crossed with Sunset Sherbet, lending a fruity cookie aroma to the strain. The other parent strain responsible for Gushers’ genetics is Triangle Kush, which is an indica that originated from Florida. Combined, the two parents produce an offspring that provides relief to patients looking to alleviate symptoms associated with anxiety, chronic pain and depression.",
    description2: "Though the name is reminiscent of a gummy-gooey snack packed in your lunch as a kid, the genetics are far from elementary. Parent strain Gelato #41 comes from Cookie family’s genetics of Girl Scout Cookie crossed with Sunset Sherbet, lending a fruity cookie aroma to the strain. The other parent strain responsible for Gushers’ genetics is Triangle Kush, which is an indica that originated from Florida. Combined, the two parents produce an offspring that provides relief to patients looking to alleviate symptoms associated with anxiety, chronic pain and depression.",
    additionalInfo: ""
  } as Product,
  {
    id: 'indica-seeds', name: 'Indica Seeds', photo: 'assets/img/products/indica-seed.jpg',
    category: "seed",
    thc: "",
    stars: 4,
    prices: [{ unit: "10 seeds", amount: 170 }, { unit: "20 seeds", amount: 220 }, { unit: "50 seeds", amount: 500 }, { unit: "100 seeds", amount: 1400 }],
    description1: "Indica marijuana seeds offer a shorter, faster and stockier plant and are renowned for their fragrant buds and relaxing body stones. The fastest of these strains can be ready in as little as 8 weeks making them a popular choice for both indoor and outdoor gardeners looking for a quick turnaround and to maximise returns.",
    description2: "Indica marijuana seeds offer a shorter, faster and stockier plant and are renowned for their fragrant buds and relaxing body stones. The fastest of these strains can be ready in as little as 8 weeks making them a popular choice for both indoor and outdoor gardeners looking for a quick turnaround and to maximise returns.",
    additionalInfo: ""
  } as Product,
  {
    id: 'kali-mist', name: 'Kali Mist', photo: 'assets/img/products/t-kali-mist.jpg',
    category: "strain",
    thc: "19% THC",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 220 }, { unit: Unit.two, amount: 362 }, { unit: Unit.three, amount: 982 }, { unit: Unit.four, amount: 1842 }, { unit: Unit.five, amount: 3122 }],
    description1: "Kali Mist is known to deliver clear-headed, energetic effects that can verge on psychedelic at times. Despite having an unknown genetic history, Kali Mist is believed to have originated in the 1990s through crossing two sativa-dominant hybrids. This lightweight sativa is a perfect choice for consumers looking to maintain focus and productivity throughout their day.",
    description2: "Kali Mist is a 90% Sativa hybrid that placed first both in the Hydro Cup of 1995 and the 2000 Seed Company Sativa Cup. The strain is a powerful two-hit combo of unknown Sativa hybrids that delivers a blast of uplifting energy. Experienced users will likely find that it clears the mind. Some also report that Kali Mist stimulates thought and find it good for writing, yoga, and meditation. This strain can be quite psychedelic at higher doses, but inexperienced users may feel this effect even at lower doses. The psychedelic property of the strain may lead to feelings of paranoia and anxiety. For this reason, users should limit hits to one or two during the day. Kali Mist may also cause dry mouth and eyes and occasional headaches. This Sativa hybrid is most often prescribed to alleviate the symptoms of stress, anxiety, and depression, and it may be used at any time of day. Some find it useful for daytime pain management, but Kali Mist may not be the best solution for severe aches and pains. Patients suffering eating disorders such as anorexia and bulimia may choose this strain to induce appetite.",
    additionalInfo: ""
  } as Product,
  {
    id: 'moonrock', name: 'Moon Rocks', photo: 'assets/img/products/moonrock.jpg',
    category: "strain",
    thc: "51.2% THC",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 220 }, { unit: Unit.two, amount: 362 }, { unit: Unit.three, amount: 982 }, { unit: Unit.four, amount: 1842 }, { unit: Unit.five, amount: 3122 }],
    description1: "Moon Rocks are a THC megazord—they’re essentially cannabis buds (historically GSC, but any strain suffices) dipped in or sprayed with hash oil, then rolled in kief. Though the potency of each batch of Moon Rocks varies and depends on how it’s made/who produces it, the general consensus is that they hover around 50% THC.",
    description2: "Moon Rock, also known as “Kurupt’s Moonrock,” is an infamous take on the classic Girl Scout Cookies strain, where the nugs are dipped in hash oil and then rolled in kief. This process supercharges the effects of Moon Rock, giving it a THC level of about 21-26% in total, making it way too strong for inexperienced users. The high hits you hard immediately after you toke, knocking you hard in the head with a cerebral rush that launches your mind into hazy bliss before leaving you completely stoned in mind and body. You’ll be utterly relaxed but totally euphoric as you slip away into a heavy couch-lock and sedation that can easily cause users to fall into a deep and peaceful sleep. Because of these effects and its insanely high THC level, Moon Rock is said to be perfect for treating insomnia, appetite loss, chronic pain, muscle spasms, and cramps. This bud has a unique flavor of earthy nutty hash that has a subtle sweetness to it from the hash oil. The aroma is surprisingly mellow, with a spicy dank overtone that’s accented by sweet earth. Moon Rock buds are round and lumpy, coated in bright kief and dripping with hash oil.",
    additionalInfo: ""
  } as Product,
  {
    id: 'northern-light', name: 'Northern Light', photo: 'assets/img/products/t-northen-light.jpg',
    category: "strain",
    thc: "17% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth. Itself a descendant of indigenous Afghani and Thai landrace strains, Northern Lights has given rise to famous hybrids like Shiva Skunk and Super Silver Haze. Rumor has it that Northern Lights first sprouted near Seattle, Washington, but was propagated out of Holland after 1985 at what is now Sensi Seeds.",
    description2: "Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth. Itself a descendant of indigenous Afghani and Thai landrace strains, Northern Lights has given rise to famous hybrids like Shiva Skunk and Super Silver Haze. Rumor has it that Northern Lights first sprouted near Seattle, Washington, but was propagated out of Holland after 1985 at what is now Sensi Seeds. Pungently sweet, spicy aromas radiate from the crystal-coated buds, which sometimes reveal themselves in hues of purple. Northern Lights’ psychoactive effects settle in firmly throughout the body, relaxing muscles and pacifying the mind in dreamy euphoria. Comfortable laziness allows patients to relieve pain and sleeplessness, while its mellow contentment roots out depression and stress. Several different Northern Lights phenotypes circulate the market, but Sensi Seeds recommends a general indoor flowering time of 45 to 50 days.",
    additionalInfo: ""
  } as Product,
  {
    id: 'northern-fiore', name: 'Northern Fiore', photo: 'assets/img/products/northern-fiore.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 270 }, { unit: Unit.two, amount: 550 }, { unit: Unit.three, amount: 1000 }, { unit: Unit.four, amount: 1500 }],
    description1: "Northern Fiore is a truly exceptional strain. Experience heightened flavor and euphoria when you consume this Sherber/Girl Scout Cookies cross! Bred by Vegan Buddha, this is a one of a kind strain that rivals any strain coming out of the Souther Colorado scene. This hybrid packs a punch and its effects are long lasting.",
    description2: "Northern Fiore is a truly exceptional strain. Experience heightened flavor and euphoria when you consume this Sherber/Girl Scout Cookies cross! Bred by Vegan Buddha, this is a one of a kind strain that rivals any strain coming out of the Souther Colorado scene. This hybrid packs a punch and its effects are long lasting.",
    additionalInfo: ""
  } as Product,
  {
    id: 'og-kush', name: 'OG kush', photo: 'assets/img/products/t-og-kush.jpg',
    category: "strain",
    thc: "18% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "OG Kush makes up the genetic backbone of West Coast cannabis varieties, but in spite of its ubiquity, its genetic origins remain a mystery. This famed strain arrived in Los Angeles in 1995 after being transplant coast-to-coast from Florida by its original propagators (now known as Imperial Genetics), along with “The Bubba,” which gave way to Bubba Kush. There are many different phenotypes of OG Kush, some of which include Tahoe OG, SFV OG, Ghost OG, and Diablo OG.",
    description2: "OG Kush makes up the genetic backbone of West Coast cannabis varieties, but in spite of its ubiquity, its genetic origins remain a mystery. This famed strain arrived in Los Angeles in 1995 after being transplant coast-to-coast from Florida by its original propagators (now known as Imperial Genetics), along with “The Bubba,” which gave way to Bubba Kush. There are many different phenotypes of OG Kush, some of which include Tahoe OG, SFV OG, Ghost OG, and Diablo OG. OG Kush is cherished for its ability to crush stress under the weight of its heavy euphoria. It carries an earthy pine and sour lemon scent with woody undertones, an aroma that has become the signature of OG Kush varieties and descendants.",
    additionalInfo: ""
  } as Product,
  {
    id: 'mothers-helper', name: 'Mother’s Helper', photo: 'assets/img/products/Mother’s Helper.jpeg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Mother’s Helper is a hybrid cross between the sativa Chocolope and a Northern Lights #5 indica. Combining these polar opposite genetics results in a variety of phenotypes that lean to either side of the indica-sativa spectrum.",
    description2: "Mother’s Helper tends to make consumers feel happy, creative, and uplifting, and offers medical benefits to patients treating pain, stress, anxiety, nausea, and migraines.",
    additionalInfo: ""
  } as Product,
  {
    id: 'pebbles', name: 'Pebbles', photo: 'assets/img/products/t-pebbles.jpg',
    category: "strain",
    thc: "18% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Strains going by the name Fruity Pebbles have circulated since at least 2006, particularly in dispensaries in Colorado. These strains are so named for smelling just like their namesake cereal. Although most are labeled as a hybrids or as slightly Indica-dominant, the true genetics of Fruity Pebbles may be impossible to discern, as individual growers may use different parent strains or breeding techniques. THC composition of strains labeled Fruity Pebbles have tested anywhere from 15% to 28%.",
    description2: "Strains going by the name Fruity Pebbles have circulated since at least 2006, particularly in dispensaries in Colorado. These strains are so named for smelling just like their namesake cereal. Although most are labeled as a hybrids or as slightly Indica-dominant, the true genetics of Fruity Pebbles may be impossible to discern, as individual growers may use different parent strains or breeding techniques. THC composition of strains labeled Fruity Pebbles have tested anywhere from 15% to 28%. One variety, created by breeders Alien Genetics, was marketed as Fruity Pebbles OG, an April 2012 limited edition. Packs of these special Fruity Pebbles OG seeds sold for $1,000-$1,500 each. The mother, a cross of Green Ribbon and Granddaddy Purps, was bred with a strain crossed from Tahoe OG and Alien Kush. Given that successful growers can reap anywhere from $1,500 to $3,000 per plant, a pack of these specialty seeds may substantially cut into profit margins for commercial growers -- and would certainly be a sunk cost for the more",
    additionalInfo: ""
  } as Product,
  {
    id: 'pineapple-express', name: 'Pineapple Express', photo: 'assets/img/products/t-pineapple-express.jpg',
    category: "strain",
    thc: "18% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes",
    description2: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes",
    additionalInfo: ""
  } as Product,
  {
    id: 'plushberry', name: 'Plushberry', photo: 'assets/img/products/t-plushberry.jpg',
    category: "strain",
    thc: "17% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes",
    description2: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting sativa-dominant hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes",
    additionalInfo: ""
  } as Product,
  {
    id: 'purple-dream', name: 'Purple Dream', photo: 'assets/img/products/t-purple-dream.jpg',
    category: "strain",
    thc: "17% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Purple Dream is the mild child of Granddaddy Purple and Blue Dream. Featuring a strong sour grape smell and musty taste, this hybrid is slightly indica dominant. Purple Dream provides users with a relaxing tingly body sensation and has moderate head-heavy effects. It allows patients to function yet acts as a gentle sedative. This strain is great for those suffering from pain or who just need help winding down.",
    description2: "Like floating on a cloud in a sea of possibilities, Purple Dream has a way of taking you on a vacation right in your own living room. Unknown breeders have created this well-balanced 50/50 hybrid strain by crossing Granddaddy Purple and Blue Dream, with some variations on the market claiming to be a mix of Blue Dream and Purple Kush. With a delightful scent and effects that take you to la-la land, Purple Dream is loved by many. A strain that’s rather moderate when it comes to THC levels, Purple Dream tends to stay within a 12% to 15% level. Don’t take that for granted though; she can still get you plenty high. Nugs of this dreamy bud are quite dark with a furry coating of orange pistils and sparkly trichomes. Both the taste and smell are incredible, with notes of flowers and pine accented by grape and blueberry. If you’ve never much liked the scent of any other strain before, this could be the one that steals your heart. Aptly named, Purple Dream sends users into a relaxed and happy place that feels creative and free without being too out of it. It takes a bit before you start to notice the effects, but soon you’ll notice that your worries are gone, you’re more alert, and you’re bordering on euphoria. You may find the inspiration to take on a new art project, or you could be chill enough to want to meditate and simply sink into the feelings of bliss. Used by medicinal cannabis patients as a sedative, it’s strong enough to take the edge off of pain and nausea without rendering you useless. Popular as an antidepressant, individuals with extreme stress or negative thoughts will appreciate how easily Purple Dream puts them into a happy state of mind.",
    additionalInfo: ""
  } as Product,
  {
    id: 'rainbow', name: 'Rainbow', photo: 'assets/img/products/t-rainbow.jpg',
    category: "strain",
    thc: "18% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Rainbow is a 50/50 indica/sativa hybrid from Spanish breeders Lifetime Seeds, created by crossing Dancehall with Blueberry. A compact, fast flowering strain with little side-branching, it does very well when grown in the “sea-of-green” style. Rainbow presents a wide array of colors towards the end of flowering, hence the moniker. With a spicy-sweet fruity flavor, this tasty hybrid can give consumers a pleasant, creative high and pain relief without a heavy body sensation.",
    description2: "Rainbow Kush is a famous strain due to its multiple colors and the pine aroma. People can find it at dispensaries as simply Rainbow. A 50/50 balanced or slightly Indica-dominant strain, Rainbow Kush has slightly above average THC at 17 percent and average CBD of 1 percent. Several breeders have attempted to perfect this strain. Dutch growers, Amsterdam Marijuana Seeds (AMS), state that they achieved their version of the Rainbow Kush strain by crossing Master Kush and Hindu Kush. Lifetime Seeds from Spain created theirs by crossing Dancehall with Blueberry. When you go to purchase this strain, you might be lured by marketing claims by the breeder, “It’s the most colorful strain ever invented in looks and flavor.” If you look at images on websites or magazines, you will definitely find pictures of rainbow colored cannabis, and those pictures are amazing. However, in real life, this bud may not look like those enhanced images or measure up to the marketing claims. What you will find is cannabis that does look different than other strains.",
    additionalInfo: ""
  } as Product,
  {
    id: 'runtz', name: 'Runtz', photo: 'assets/img/products/runzz.jpg',
    category: "strain",
    thc: "",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 270 }, { unit: Unit.two, amount: 550 }, { unit: Unit.three, amount: 1000 }, { unit: Unit.four, amount: 1500 }],
    description1: "A cross between Zkittlez and Gelato, Runtz derives its name from both its colorful appearance and its flavor profile that’s sugary-sweet. When you lay your eyes on a well-cultivated batch of Runtz buds, you’ll be able to pick out colors beyond green such as various hues of purples and blues, along with orange pistils and shades of greens in between.",
    description2: "There are a few phenotypes of Runtz out there so it’s possible to find either a sativa-dominant or indica-dominant strain of Runtz. THC levels can vary as well because of this, so be sure to check the label before firing up this strain. Reviewers have reported Runtz ability to create a high that’s both euphoric and relaxing, so effects are often felt in both the head and body. Anxiety may recede along with stress, and bodily ailments such as mild aches may find relief with this strain. Runtz is a rare strain find, so not much is known to-date about this strain in regards to its THC and CBD content. However, reviewers enjoy its sweet, fruity, and candy-like scent and taste as well as its spectrum of color. If you come across Runtz in your local dispensary and decide to pick some up, after you give it a try create your own review and share your experience with others.",
    additionalInfo: ""
  } as Product,
  {
    id: 'gary-payton-cookies-strain', name: 'Gary Payton Cookies Strain', photo: 'assets/img/products/garyy.png',
    category: "strain",
    thc: "32% THC",
    stars: 4,
    prices: [{ unit: Unit.one, amount: 270 }, { unit: Unit.two, amount: 550 }, { unit: Unit.three, amount: 1000 }, { unit: Unit.four, amount: 1500 }],
    description1: "THC level 32% CBD 0.02%  Buy gary payton cookies strain. A collaboration between Cookies and Powerzzz Genetics, Gary Payton is a highly coveted Cookies cultivar named after the NBA Hall of Famer. Combining the Y and Snowman breeds a potent, flavorful, and colorful strain. It has high amounts of THC and almost no CBD, and middle-of-the-road effects that provide an even-keeled experience.",
    description2: "THC level 32% CBD 0.02%  Buy gary payton cookies strain. A collaboration between Cookies and Powerzzz Genetics, Gary Payton is a highly coveted Cookies cultivar named after the NBA Hall of Famer. Combining the Y and Snowman breeds a potent, flavorful, and colorful strain. It has high amounts of THC and almost no CBD, and middle-of-the-road effects that provide an even-keeled experience.",
    additionalInfo: ""
  } as Product,
  {
    id: 'sativa-seeds', name: 'Sativa Seeds', photo: 'assets/img/products/sativa-seed.jpg',
    category: "seed",
    thc: "",
    stars: 4,
    prices: [{ unit: "10 seeds", amount: 170 }, { unit: "20 seeds", amount: 220 }, { unit: "50 seeds", amount: 500 }, { unit: "100 seeds", amount: 1400 }],
    description1: "Best Sativa seeds available here for sale. Although known for producing well outdoors, Sativa seeds are equally suited to indoor gardens where space is slightly more limited. Our seeds offer a range of pure, hybrid and autoflowering varieties, stabilised for all environments. They’re available in both regular and feminized.",
    description2: "Best Sativa seeds available here for sale. Sativa strains are best characterised by their soaring, cerebral highs, long thin fan leafs and taller plant structure. They’re a favourite amongst growers looking for a daytime smoke as the Higher THC to CBD ratio gives an uplifting energetic feeling rather than the stereotypical stoned, body buzz associated with Indica strains. Originating in the sub-continent, Cannabis Sativa hails from the warmer climate of Central America and more tropical regions, thanks in part to the longer sunlight hours. It’s here that the vast majority of our base breeding strains originate, and from where we are able to develop some of the best sativa seeds available.",
    additionalInfo: ""
  } as Product,
  {
    id: 'hybrid-seeds', name: 'Hybrid Seeds', photo: 'assets/img/products/seed-pack.jpg',
    category: "seed",
    thc: "",
    stars: 4,
    prices: [{ unit: "10 seeds", amount: 170 }, { unit: "20 seeds", amount: 220 }, { unit: "50 seeds", amount: 500 }, { unit: "100 seeds", amount: 1400 }],
    description1: "Best Sativa seeds available here for sale. Although known for producing well outdoors, Sativa seeds are equally suited to indoor gardens where space is slightly more limited. Our seeds offer a range of pure, hybrid and autoflowering varieties, stabilised for all environments. They’re available in both regular and feminized.",
    description2: "Best Sativa seeds available here for sale. Sativa strains are best characterised by their soaring, cerebral highs, long thin fan leafs and taller plant structure. They’re a favourite amongst growers looking for a daytime smoke as the Higher THC to CBD ratio gives an uplifting energetic feeling rather than the stereotypical stoned, body buzz associated with Indica strains. Originating in the sub-continent, Cannabis Sativa hails from the warmer climate of Central America and more tropical regions, thanks in part to the longer sunlight hours. It’s here that the vast majority of our base breeding strains originate, and from where we are able to develop some of the best sativa seeds available.",
    additionalInfo: ""
  } as Product,
  {
    id: 'sour-diesel', name: 'Sour-Diesel', photo: 'assets/img/products/t-sour-diesel.jpg',
    category: "strain",
    thc: "19% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdawg 91 and Super Skunk.",
    description2: "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdawg 91 and Super Skunk.",
    additionalInfo: ""
  } as Product,
  {
    id: 'strawberry-diesel', name: 'Strawberry Diesel', photo: 'assets/img/products/t-strewberry-diesel.jpg',
    category: "strain",
    thc: "16% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "The Strawberry Diesel marijuana strain is a sativa-dominant hybrid covered in orange hairs with an intense odor and trichome-covered nugs. The Strawberry Diesel high is intense and long-lasting, and is not recommended for complex tasks.",
    description2: "The Strawberry Diesel marijuana strain is a sativa-dominant hybrid covered in orange hairs with an intense odor and trichome-covered nugs. The Strawberry Diesel high is intense and long-lasting, and is not recommended for complex tasks.",
    additionalInfo: ""
  } as Product,
  {
    id: 'white-widow', name: 'White Widow', photo: 'assets/img/products/t-white-widow.jpg',
    category: "strain",
    thc: "20% THC",
    stars: 4,
    prices: [{ unit: "Half Ounce (15 grams)", amount: 115 }, { unit: "Ounce (28 grams)", amount: 225 }, { unit: "Quarter Pound (114 grams)", amount: 662 }, { unit: "Half Pound (227 grams)", amount: 962 }, { unit: "Pound (454 grams)", amount: 1650 }],
    description1: "White Widow is a staple sativa-dominant hybrid with powerful energizing effects. It was produced by Dutch veterans Green House Seeds in the 1990s as a cross between Brazilian indica and South Indian sativa landraces. At the time, the underground cannabis market consisted mostly of early hybrids like Northern Lights and Haze, but White Widow has since joined the ranks of these legendary strains, winning an early High Times Cannabis Cup in 1995 and several awards since. Bred specifically for a high trichome count, White Widow is especially valued in the production of hash. This strain has an average THC composition of 20%, with some phenotypes exceeding that amount.",
    description2: "Legendary for its off-the-charts resin production, White Widow is a staple sativa-dominant hybrid with powerful energizing effects. It was produced by Dutch veterans Green House Seeds in the 1990s as a cross between Brazilian indica and South Indian sativa landraces. At the time, the underground cannabis market consisted mostly of early hybrids like Northern Lights and Haze, but White Widow has since joined the ranks of these legendary strains, winning an early High Times Cannabis Cup in 1995 and several awards since. Bred specifically for a high trichome count, White Widow is especially valued in the production of hash. This strain has an average THC composition of 20%, with some phenotypes exceeding that amount. Buds of White Widow are chunky and somewhat conical and tapered. The bud structure of the flowers are more sativa than indica, with a loose and fluffy texture that can be broken up somewhat easily despite its stickiness. The leaves are spring green with few visible pistils. When grown successfully, buds are entirely covered in long-stalked trichomes, lending the whitish-gray appearance that gives the strain its memorable name. White Widow is known for having a stinging, ammonia-like scent with some hints of earthy pine. Breaking buds open gives off a more hashy, incense-like odor. The smooth smoke tastes similarly earthy -- users accustomed to fruity or tasty crossbreeds may be disappointed by White Widow’s relative lack of flavor. That said, White Widow is especially pungent when combusted, so smokers worried about discretion should plan accordingly. What this strain lacks in flavor profile, it makes up for in quick-acting cerebral effects. Users can become more acutely perceptive of their surroundings, tuned into sounds and patterns that may have gone unnoticed before. Enthusiasts also describe an almost immediate uplift in mood and an energy and focus that can applied to either mundane tasks like cleaning or more complex problem-solving processes. White Widow can also be creatively valuable, inducing a kind of rapid-fire thought association that can open up some previously unexplored territory. Psychedelic effects like visual distortion and increased perception can amplify the impact of music or art, while a very mild body buzz mellows users out. Because of its deeply cerebral effects, this strain is typically more psychologically than physically helpful. It can aid those with attention deficit disorders in sustaining focus on a single topic. It can also boost energy in cases of fatigue or depression. Some users have even described White Widow as efficient in relieving migraines.",
    additionalInfo: ""
  } as Product,
  {
    id: 'vaping-1', name: 'Vape Pen 1', photo: 'assets/img/products/vaping-1.jpg',
    category: "vape",
    thc: "",
    stars: 4,
    prices: [{ unit: "500mg Sativa C-Cell Cartridge", amount: 40 }, { unit: "500mg Indica C-Cell Cartridge", amount: 40 }, { unit: "1000mg Hybrid C-Cell Cartridge", amount: 70 }, { unit: "1000mg Indica C-Cell Cartridge", amount: 70 }, { unit: "1000mg Hybrid C-Cell Cartridge", amount: 70 }],
    description1: "The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!",
    description2: "The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!",
    additionalInfo: ""
  } as Product,
  {
    id: 'vaping-2', name: 'Vape Pen 2', photo: 'assets/img/products/vaping-2.jpg',
    category: "vape",
    thc: "",
    stars: 4,
    prices: [{ unit: "500mg Sativa C-Cell Cartridge", amount: 40 }, { unit: "500mg Indica C-Cell Cartridge", amount: 40 }, { unit: "1000mg Hybrid C-Cell Cartridge", amount: 70 }, { unit: "1000mg Indica C-Cell Cartridge", amount: 70 }, { unit: "1000mg Hybrid C-Cell Cartridge", amount: 70 }],
    description1: "The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!",
    description2: "The only place to buy verified CBD vape oil online. 100% organic, Non-GMO, pesticides free, certified and proudly made in the USA. Free worldwide shipping!",
    additionalInfo: ""
  } as Product,
  {
    id: 'bubba-shatter', name: 'Bubba Shatter', photo: 'assets/img/products/bubba-shatter.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "07g", amount: 119 }, { unit: "14g", amount: 238 }, { unit: "28g", amount: 476 }, { unit: "56g", amount: 952 }, { unit: "224g", amount: 3808 }],
    description1: "Bubba Kush shatter is an indica strain shatter that has gained notoriety in the U.S. and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over. From head to toe, muscles ease with heaviness as dreamy euphoria blankets the mind, crushing stress while coercing happy moods. Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple.",
    description2: "Quantity:	 07g, 14g, 28g, 56g, 224g",
    additionalInfo: ""
  } as Product,
  // {
  //   id: 'cannabis-cherry', name: 'Cannabis Cherry', photo: 'assets/img/products/cannabis-cherry.jpg',
  //   category: "concentrate",
  // thc: "",
  //   stars: 4,
  //   prices: [{ unit: "05g", amount: 240 }, { unit: "10g", amount: 470 }, { unit: "15g", amount: 820 }, { unit: "20g", amount: 1470 }],
  //   description1: "Cherry Pie's parents are Granddaddy Purple and Durban Poison. With buds that are dense and full of orange hairs and a touch of purple, this strain smells of sweet and sour cherry pie. The effects have been known to come on in minutes and stick around for a couple hours.",
  //   description2: "Quantity:	 5g, 10g, 15g, 20g",
  //   additionalInfo: ""
  // } as Product,
  // {
  //   id: 'dry-sift-hash', name: 'Dry Sift Hash', photo: 'assets/img/products/dry-sift-hash.jpg',
  //   category: "concentrate",
  // thc: "",
  //   stars: 4,
  //   prices: [{ unit: "05g", amount: 240 }, { unit: "10g", amount: 470 }, { unit: "15g", amount: 820 }, { unit: "20g", amount: 1470 }],
  //   description1: "Dry sift is a form of hash, like kief, that’s named after the process used to make it. It’s a hands-on, craft approach to separating the trichome heads from the plant material. The dry sift technique uses screens with extremely fine mesh to hand-sift the dried flowers or trim, removing the resinous glands and refining the extract into a granular consistency. High-quality dry sift is appreciated for its artisanal process and revered for its terpene profile, potency, and its ability to melt and vaporize completely.",
  //   description2: "Quantity:	 5g, 10g, 15g, 20g",
  //   additionalInfo: ""
  // } as Product,
  {
    id: 'bho', name: 'Butane Hash Oil', photo: 'assets/img/products/hash-bho.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "05g", amount: 240 }, { unit: "10g", amount: 470 }, { unit: "15g", amount: 820 }, { unit: "20g", amount: 1470 }],
    description1: "BHO is a strong concentrate of cannabinoids that is obtained by immersing the cannabis plant in a solvent, normally butane leaving a stick and resinous liquid after the extraction process. It has a high concentration of THC going up to 80% and is also referred to as honey oil, earwax or shatter, depending on the mode of production. Butane hash oil can be smoked, vaporized directly or ingested by mixing it with other edible products. BHO can be used to treat chronic pain.",
    description2: "Quantity:	 5g, 10g, 15g, 20g",
    additionalInfo: ""
  } as Product,
  // {
  //   id: 'og-kush-shatter', name: 'OG Kush Shatter', photo: 'assets/img/products/ogk.jpg',
  //   category: "concentrate",
  // thc: "",
  //   stars: 4,
  //   prices: [{ unit: "05g", amount: 240 }, { unit: "10g", amount: 470 }, { unit: "15g", amount: 820 }, { unit: "20g", amount: 1470 }],
  //   description1: "OG Kush Shatter is made from the highest quality OG Kush cannabis in Canada. This hybrid strain of cannabis has lineage linking back to Chemdawg and Hindu Kush offering many benefits to medical patients and recreational consumers alike. OG Kush is known for causing the munchies and for providing intensive relief from pain, depression and anxiety. OG Kush Shatter can be enjoyed within any of your preferred dabbing devices.",
  //   description2: "Quantity:	 5g, 10g, 15g, 20g",
  //   additionalInfo: ""
  // } as Product,
  {
    id: 'royal-kush-wax', name: 'Royal Kush Wax', photo: 'assets/img/products/royal-kush-wax.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "05g", amount: 240 }, { unit: "10g", amount: 470 }, { unit: "15g", amount: 820 }, { unit: "20g", amount: 1470 }],
    description1: "Royal Kush wax is a king among hybrid waxes, delivering powerful trance-like effects with an earthy, skunky aroma. This balanced hybrid descends from the renowned line of Afghani and Skunk #1, two strains that have gained legendary status among cannabis breeders. Royal Kush’s happy, euphoric relaxation branches out in full-body effects that later ease into deep restfulness conducive for sleep. Patients treating stress, pain, and nausea can benefit from Royal Kush’s potent relief, but less seasoned consumers should take caution with this hard-hitter. This strain has a unique coverage of white pistil hairs, and growers are recommended an 8 to 13 week flowering time for their indoor Royal Kush plants.",
    description2: "Quantity:	 5g, 10g, 15g, 20g",
    additionalInfo: ""
  } as Product,
  {
    id: 'cbd-isolate', name: 'CBD Isolate', photo: 'assets/img/products/cbd-isolate.jpg',
    category: "concentrate",
    thc: "",
    stars: 4,
    prices: [{ unit: "05g", amount: 100 }, { unit: "10g", amount: 190 }, { unit: "25g", amount: 480 }, { unit: "50g", amount: 960 }, { unit: "100g", amount: 1900 }, { unit: "500g", amount: 8000 }],
    description1: "99% Pure CBD (Cannabidiol) Isolate derived entirely from industrial hemp oil tha was extracted from industrial hemp. This produt comes in the Crystalline Powdered) form, making it extremely easy to work with as an ingredient.",
    description2: "Quantity:	 5g, 10g, 15g, 25g, 50g",
    additionalInfo: ""
  } as Product,
];
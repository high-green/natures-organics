import { Deserializable } from "./deserializable";

export class Brand implements Deserializable {
    name: string;
    id: string;
    photo1: string;
    photo2: string;
    description1: string;
    description2: string;
    comments: string[]

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export enum Brands {
    stiiizy = 'stiiizy',
    muhaMed = 'muha-meds',
    muhaMini = 'muha-mini',
    roveCarts = 'rove-carts',
    domainName = 'domain-name'
}

export const ALLBRANDS = [

    {
        name: "Muha Meds",
        id: Brands.muhaMed,
        description1: "MuhaMeds is a Vape brand that comes both in 500gram and 1gram cartridges (they are also available in half and full gram cartridges) which last ~150 and ~300 puffs each. It is commonly known that MuhaMeds products do not contain addictives, Vitamine E, PG or VG, however, their CCELL cartridges are equipped with the larger chambers and entrying points doubled providing quicker effects. Made with ceramic heating elements for superior heat control, MuhaMeds cartridges produces flavorful and smooth vapor for a richer experience. Sacrifice and use the best than to settle for average.",
        description2: "MuhaMeds brand innovated with a new cartridges called MuhaMini which are more pratical in terms of transportation and usability than the already existed cartridges. With a sleek buttonless design, the MuhaMeds Vape Battery activates at your inhale and each 4-seconds activation yields ~3.5mg of cannabis oil. Muhameds cartridges work best with the MuhaMeds Vape Battery, but are compatible with any 510 threaded battery within a 3.2v-3.7v voltage range. The MuhaMeds Vape Battery is fully charged in 3-4 hours and are also easy to dismount by simply disconnecting from the battery unit and dispose it.",
        comments: [
            "Excellent, a worthwhile high adventure.",
            "A cost-effective vapor pen that is equipped with fast charging. It’s safe, clean and ready to use; excellent for on-the-go vaping.",
            "Great tasting hits with a higher grade of clarity. Never diluted or mixed with any contaminants, propylene glycol, particulates or harmful smoke toxins",
            "I've personally never had any problems, and I live in Northern California, where you can get dispensaries to deliver you them without any hassle. The oil in mine seems extremely high quality and potency, more so than most other cartridges I've tried in the area, and I've never had any bad symptoms such as headaches. Also, to note, the carts I get you can't take the top off, they're completely sealed full grams",
            "Stealthy, unobtrusive and perfectly sized for your pocket. This pen has a gentle vapor fragrance that does not smell like marijuana and can easily be stored away.",
            "Solid and well-hitting, this vaporizer delivers a strong pull accompanied by a great taste and fantastic airflow that does not thicken or clot.",
            "Should try this out. I'm a new smoker and just bought some top shelf stuff that just made me too high and panic set in. My seasoned smoker friends enjoyed your stuff too. Great products Mann.",
        ],
        photo1: "assets/img/muha-meds/muha-meds1.jpg",
        photo2: "assets/img/muha-meds/muha-meds2.jpg"
    } as Brand,
    
    {
        name: "Rove Carts",
        id: Brands.roveCarts,
        description1: "Rove built the foundation of their company on honesty, simplicity, and transparency. Their mission is to provide customers with great tasting vape cartridges and reliable and dependable vape pens. Rove proudly stands opposed to the trend of exaggerated quality and misinformation within product test results. Rove wants their customers to know they have their best interests in mind with every single step they take. They strive for excellence and are dedicated to improvement.",
        description2: "Welcome to Rove, where the best is always getting better. The enthusiasts behind Rove noticed the cannabis industry’s growing interest in vape pens and cartridges. Already established in various arenas within the marijuana industry, they looked amongst their peers and individually came to the same conclusion: “we could do a lot better with more transparency.” In 2015, they quickly banded together to combine their wealth of cultivation, extraction, and laboratory experience to create Rove.",
        comments: [
            "Should try this out. I'm a new smoker and just bought some top shelf stuff that just made me too high and panic set in. My seasoned smoker friends enjoyed your stuff too. Great products Mann.",
            "First time using the Rove. Incridible product",
            "It’s my first time buying Rove, so I went cheap and bought a half gram. After a few hit I realized I fucked up and should’ve bought a full gram. This product is good af, and my wife loves it too",
            "Rove is consistently the best of the best when it comes to the premium cart game...Idk why I ever stray away from them, because I’m always disappointed by other companies when I do. 100% loyal to ROVE, given they continue their tract record of excellence. Keep up the stellar work, I love you guys!!",
            "Ever since the first time I tried Rove about 2 years ago. I have been a advocate of all things Rove Brand. Absolutely love the way they taste and they definitely do the job for me.",
            "I have my preference, but I haven't had a single cart or flavor that I didn't like. Everything from the packaging, the cart, and especially the oil itself is superb. They clearly strive to make a premium product and it shows. I have not experienced the leaking and clogging problems with the new cartridges.",
            "Everything from the CBD line to Feature Farms you can’t go wrong with any flavor."
        ],
        photo1: "assets/img/rove/rove1.jpg",
        photo2: "assets/img/rove/rove2.jpg"

    } as Brand,

    {
        name: "domain-name",
        id: Brands.domainName,
        description1: "",
        description2: "",
        comments: [
            "Great blue dream cannabis for $160. Gives you a relaxing high and a small buzz of energy at the same time. I did have some stems, but honestly, you'll have that with a business who prides freshness on their products. I also got a couple of seeds from my order and I'm really excited to see if I can grow some.",
            "Grand daddy strain.I'm so glad each time I get this strain. It's got a great smell, great lookand hits you good.",
            "Should try Gushers starin out. I'm a new smoker and just bought some top shelf stuff that just made me too high and panic set in. My seasoned smoker friends enjoyed your stuff too. Great products Mann.",
            "Great service. I quickly received my order which is the norm of this site. Great buzz, quite sticky when trying to roll it. The only fallback is all the stems, but again great product for the price.",
            "Great products. Great and patient staff, upon all my worries i had.",
            "Great product love the flavors in the taste recommend get the cartridges and your distillate",
            "These guys are at the top of the their game and only getting better!!!! Top quality Product and amazing people!!!!",
            "Currently smoking a full g cart of their fruity pebbles and no issues so far. I've been taking other flavors since early 2018",
            " Everytime I order from PG, I'm certain of the quality of product I'll get. It gets better everytime. Great Job guys. You got me always coming back.",
            " My batch wasn't very stenny, consisted of mostly large buds, the smell was nice and automatic while opening the package. Only thing I noticed was it is a lil less strong than normal with a lil bit of harshness when you pack bigger bowls, but the price was great though, if you're looking to save money.",
            "Always like to try something colorful and different. This time I love what I got. Great strain. Thanks for the great services too.",

        ],
        photo1: "",
        photo2: ""
    } as Brand,

    {
        name: "Muha Mini",
        id: Brands.muhaMini,
        description1: "MuhaMeds brand innovated with a new cartridges called MuhaMini which are more pratical in terms of transportation and usability than the already existed cartridges. With a sleek buttonless design, the MuhaMeds Vape Battery activates at your inhale and each 4-seconds activation yields ~3.5mg of cannabis oil. Muhameds cartridges work best with the MuhaMeds Vape Battery, but are compatible with any 510 threaded battery within a 3.2v-3.7v voltage range. The MuhaMeds Vape Battery is fully charged in 3-4 hours and are also easy to dismount by simply disconnecting from the battery unit and dispose it.",
        comments: [
            "Has a decently strong flavor, but some artifitial flavor too, besides this, it's not bad.",
            "I'm so glad each time I get ths grand daddy flavor strain. It's got a great smell, great look and hits you good.",
            "More practical then their big brothers. Love it but still waiting for how long it's gonna last",
            "Always stocked up with great products and good flavors. love this brand",
            "Good innovating product. seem to be the luckiest who got his product delivered in little or no time, cuz on of my dude recieved his package about three days after i recieved mine. Thanks though for the services.",
            "Should try this out. I'm a new smoker and just bought some top shelf stuff that just made me too high and panic set in. My seasoned smoker friends enjoyed your stuff too. Great products Mann.",


        ],
        photo1: "assets/img/brands/muha-mini/muha-mini1.jpg"

    } as Brand,
]
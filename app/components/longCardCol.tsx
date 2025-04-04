import LongCard from "./longCard";

interface props {
    type : string,
    Photo : string
}

export default function LongCardCol({type, Photo} : props) {
    // console.log("type : "+type);
    if(type == "Dogs") {
        return(
            <div className="flex flex-col justify-center items-center w-full h-fit space-y-8">
                <LongCard type={type!} topic="Agression" detail="Aggression is the most common and most serious behavior problem in dogs. Different forms of aggression require different treatments." img={Photo+"agression.jpg"}/>
                <LongCard type={type!} topic="Barking" detail="Each type of bark serves a distinct function for dogs. Identify the reason for barking before seeking treatment." img={Photo+"dog-barking.png"}/>
                <LongCard type={type!} topic="Food Guarding" detail="Resource guarding can range from benign to aggressive. Lean how to prevent and treat this canine behavior." img={Photo+"dog-food.jpg"}/>
                <LongCard type={type!} topic="Puppies" detail="Young dogs explore the world with their mouths, but it’s important to train them away from mouthy behaviour." img={Photo+"dog-puppies.webp"}/>
                <LongCard type={type!} topic="Adult Dogs" detail="Adult dogs can inadvertently cause injury with their mouths. You can teach your dog to be gentle instead." img={Photo+"dog-adult.jpg"}/>
                <LongCard type={type!} topic="Howling" detail="Like barking, dogs howl for many reasons. Learn what to do if your dog howls excessively." img={Photo+"dog-howling.jpg"}/>
                <LongCard type={type!} topic="Whining" detail="Dogs whine for different reasons. Identify the trigger before seeking treatment." img={Photo+"dog-whining.jpeg"}/>
                <LongCard type={type!} topic="Separation Anxiety" detail="Many dogs become destructive or disruptive when left alone. Read tips to help manage separation anxiety." img={Photo+"dog-separation.jpg"}/>
            </div>
        );
    }
    if(type == "Cats") {
        return(
            <div className="flex flex-col justify-center items-center w-full h-fit space-y-8">
                <LongCard type={type!} topic="Agression" detail="If your cat seems overly aggressive, there could be several reasons for his or her behavior." img={Photo+"cat-agression.jpg"}/>
                <LongCard type={type!} topic="Aggression Between Cats in Your Household" detail="Feline aggression and find out how to create peace between your cats." img={Photo+"cat-agression-two.jpg"}/>
                <LongCard type={type!} topic="Destructive Scratching" detail="Cats enjoy scratching for many reasons, including stretching, marking their territory and playing." img={Photo+"Cat-Scratching-Paper.jpg"}/>
                <LongCard type={type!} topic="Little Box Problems" detail="Little box problems for cats can be diverse and complex, but treatments can be very effective." img={Photo+"cat-box.jpg"}/>
                <LongCard type={type!} topic="Meowing and Yowling" detail="Learn more about why cats meow, and what to do if your cat’s meowing becomes excessive." img={Photo+"cat-meowing.jpg"}/>
                <LongCard type={type!} topic="Older Cats with Behavior Problems" detail="As your cat ages, he or she may experience a decline in cognitive functioning." img={Photo+"cat-older.jpg"}/>
                <LongCard type={type!} topic="Urine Marking in Cats" detail="It is important to determine whether your cat has a little box problem, or if he or she is urine marking." img={Photo+"cat-urine-marking.jpg"}/>
               
            </div>
        );
    }
    if(type == "PetHelp") {
        return(
            <div className="flex flex-col justify-center items-center w-full h-fit space-y-8">
                <LongCard topic="Allergies to Pets" detail="Roughly 15 to 20% of the population is allergic to pets. Read tips for coping with allergies." img={Photo+"allergies.jpg"}/>
                <LongCard topic="Cutting Pet Care Costs" detail="Here are a few tips to help you save money on your pet’s health care." img={Photo+"cutting.jpg"}/>
                <LongCard topic="Spay/Neuter Your Pet" detail="Spaying or neutering your pet helps control the pet overpopulation crisis." img={Photo+"spay-pet.webp"}/>
                <LongCard topic="Emergency Care For Your Pet" detail="It’s crucial to have an emergency plan in place before you need it." img={Photo+"emergency-care.jpg"}/>
                <LongCard topic="End Of Life Care" detail="Read on to find out how to help make your pet’s final days peaceful and dignified." img={Photo+"End-of-Life.png.webp"}/>
                <LongCard topic="Finding a Lost Pet" detail="Take swift action and follow these steps to locate your missing pet." img={Photo+"lost-pet.jpg"}/>
                <LongCard topic="Vaccinations for Your Pet" detail="Vaccinating your pet is one of the easiest ways to help him live a long, healthy life." img={Photo+"vaccination.jpeg"}/>
            </div>
        );
    }
}
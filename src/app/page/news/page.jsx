import CommanContainer from "@/app/components/Container/Container";
import Image from "next/image";

export default function News() {
  return (
    <div className="news-container">
      <CommanContainer>
        <div className="bgNews gap-x-9 sm-flex flex m-4 md:m-0 p-4 custome-h overflow-x-auto">
          <div className="w-3/5">
            <h1 className="pb-3 font-sans not-italic font-bold text-2xl">$1M Gambling Fraud Mastermind Lands Prison Sentence</h1>
            <p className="font-sans not-italic text-white font-medium text-sm">
              Peter Holbrook, a 75-year-old Brit, appeared in court today for a sentencing hearing after being accused of stealing around £849,000 (US$1.06 million) from multiple individuals. The entrance to the Bradford Crown Court in the UK. A financial consultant who stole from clients for his gambling habit will head to jail. (Image: Alamy) On Friday afternoon, a courtroom filled with victims and their families gathered to hear the harrowing account of Holbrook’s offenses. Holbrook, an alleged financial consultant and estate planner, targeted vulnerable elderly individuals. Under the scheme, Holbrook convinced individuals to invest their money with him. In exchange, he claimed he would help the victims write their wills. He then used the victim’s life savings to support his gambling addiction. One victim, age 86, who lost £384,000 (US$486,806) from her late husband’s estate, suffered immense hardship due to Holbrook’s actions. She died earlier this year. During the hearing, Holbrook’s lawyer argued that he was essentially a good person with a strong moral compass despite his ten-year-long hustle. Despite the potential maximum sentence of 10 years, the judge imposed a five-year and three-month sentence. No information is available regarding parole eligibility.
            </p>

            <h1 className="py-5 font-sans not-italic font-bold text-2xl">Former Gun Lake Casino Employee Pleads Guilty to Stealing $84K</h1>
            <p className="font-sans not-italic text-white font-medium text-sm">
              A former Gun Lake Casino employee has admitted to stealing more than $84,000 from the property owned and operated by the Match-E-Be-Nash-She-Wish Band of Pottawatomi Indians. A former employee at the Gun Lake Casino in Michigan has pleaded guilty to stealing more than $84,000 in cash from the tribal-owned business. Jordan Lewis Clark admitted to stealing the money while attending to “cash out machines” that jammed. (Image: ABC13) A federal grand jury in the Western District of Michigan in March indicted Jordan Lewis Clark on federal charges related to embezzlement and theft from an “Indian Tribal Organization.” Federal prosecutors alleged that Clark repeatedly stole from the Gun Lake Casino while working at the property as a floor machine attendant. After being arraigned in May and released on $10,000 bail, Clark and his attorneys concluded it was in his best interest to admit his guilt. Clark entered a plea agreement late last month, and US Magistrate Judge Ray Kent accepted the settlement late last Friday. Clark pleaded guilty to a single charge of theft from an Indian Tribal Organization.
            </p>
          </div>
          <div className="w-2/5">
            <div className="bgNewsBlog p-4">
              <Image width={500} height={100} src="/assets/news/news.png" className="w-full rounded-3xl" alt="news" />
              <h1 className="pt-3 pb-5 font-sans not-italic font-bold text-2xl">$1M Gambling Fraud Mastermind Lands Prison Sentence</h1>
              <p className="font-sans not-italic text-white font-medium text-sm">Most Americans understand skipping the 13th floor. Why would you want to rent a room there when you probably came to Las Vegas to chase good luck in a casino? The floors at the Rio skip from 39 to 50. (Image: Scott Roeben/Vital Vegas) But the 4th and the 40s are banished because, to many Asian visitors, the number 4 is just as unlucky as 13 is to Westerners. And that’s because it sounds similar to the word for “death.” (Both are transliterated as “si” in Mandarin, and as “shi” in Japanese.) Also following this hotel-heightening design are Planet Hollywood, Aria, Delano, Resorts World, the Rio, and the Palms, which are all at least 10 stories shorter than they claim to be on their driver’s licenses.</p>
            </div>
          </div>
        </div>
      </CommanContainer>
    </div>
  )
}
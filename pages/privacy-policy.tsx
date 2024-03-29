import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <Box as="section">
        <Box as="section" pb="20">
          <Container py={{ base: "16", md: "24" }}>
            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Privacy Policy
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              Our Privacy Policy was last updated on 10/01/2022.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy was generated by TermsFeed Privacy Policy Generator.
            </Text>
            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Interpretation and Definitions
            </Heading>
            <Text as="p" fontSize="lg" py={4}>
              Interpretation
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural. Definitions
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              For the purposes of this Privacy Policy:
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Account" means a unique account created for You to access our`}
              Service or parts of our Service.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Business", for the purpose of the CCPA (California Consumer
              Privacy Act), refers to the Company as the legal entity that
              collects Consumers' personal information and determines the
              purposes and means of the processing of Consumers' personal
              information, or on behalf of which such information is collected
              and that alone, or jointly with others, determines the purposes
              and means of the processing of consumers' personal information,
              that does business in the State of California.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Company" (referred to as either "the Company", "We", "Us" or
              "Our" in this Agreement) refers to Craftech-io, Inc. 651 North
              Broad Street Middletown, DE. For the purpose of the GDPR, the
              Company is the Data Controller.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Country" refers to United State.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Consumer", for the purpose of the CCPA (California Consumer
              Privacy Act), means a natural person who is a California resident.
              A resident, as defined in the law, includes (1) every individual
              who is in the USA for other than a temporary or transitory
              purpose, and (2) every individual who is domiciled in the USA who
              is outside the USA for a temporary or transitory purpose.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Cookies" are small files that are placed on Your computer, mobile
              device or any other device by a website, containing the details of
              Your browsing history on that website among its many uses.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Data Controller", for the purposes of the GDPR (General Data
              Protection Regulation), refers to the Company as the legal person
              which alone or jointly with others determines the purposes and
              means of the processing of Personal Data.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Device" means any device that can access the Service such as a
              computer, a cell phone or a digital tablet.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Do Not Track" (DNT)” is a concept that has been promoted by US
              regulatory authorities, in particular the U.S. Federal Trade
              Commission (FTC), for the Internet industry to develop and
              implement a mechanism for allowing internet users to control the
              tracking of their online activities across websites.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {` "Personal Data" is any information that relates to an identified
              or identifiable individual.For the purposes of GDPR, Personal Data
              means any information relating to You such as a name, an
              identification number, location data, online identifier or to one
              or more factors specific to the physical, physiological, genetic,
              mental, economic, cultural or social identity.For the purposes of
              the CCPA, Personal Data means any information that identifies,
              relates to, describes or is capable of being associated with, or
              could reasonably be linked, directly or indirectly, with You.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Sale", for the purpose of the CCPA (California Consumer Privacy
              Act), means selling, renting, releasing, disclosing,
              disseminating, making available, transferring, or otherwise
              communicating orally, in writing, or by electronic or other means,
              a Consumer's personal information to another business or a third
              party for monetary or other valuable consideration.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Service" refers to the Website.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Service Provider" means any natural or legal person who processes
              the data on behalf of the Company. It refers to third-party
              companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the Company
              in analyzing how the Service is used. For the purpose of the GDPR,
              Service Providers are considered Data Processors.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Usage Data" refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"Website" refers to Sleakops, accessible from https://sleakops.com`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`"You" means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.Under GDPR
              (General Data Protection Regulation), You can be referred to as
              the Data Subject or as the User as you are the individual using
              the Service.`}
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Collecting and Using Your Personal Data
            </Heading>
            <Text as="p" fontSize="lg" py={4}>
              Types of Data Collected
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Personal Data
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Email address
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              First name and last name
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Phone number
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Address, State, Province, ZIP/Postal code, City
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Usage Data
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              Usage Data
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              Usage Data is collected automatically when using the Service.
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              {`Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.`}
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              Tracking Technologies and Cookies
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Cookies or Browser Cookies. A cookie is a small file placed on
              Your Device. You can instruct Your browser to refuse all Cookies
              or to indicate when a Cookie is being sent. However, if You do not
              accept Cookies, You may not be able to use some parts of our
              Service. Unless you have adjusted Your browser setting so that it
              will refuse Cookies, our Service may use Cookies.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Web Beacons. Certain sections of our Service and our emails may
              contain small electronic files known as web beacons (also referred
              to as clear gifs, pixel tags, and single-pixel gifs) that permit
              the Company, for example, to count users who have visited those
              pages or opened an email and for other related website statistics
              (for example, recording the popularity of a certain section and
              verifying system and server integrity).
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              {`Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser.`}
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Necessary / Essential Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Type: Session Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Administered by: Us
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Cookies Policy / Notice Acceptance Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Type: Persistent CookiesAdministered by: Us
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Functionality Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Type: Persistent CookiesAdministered by: Us
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              Tracking and Performance Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Type: Persistent Cookies
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Administered by: Third-Parties
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Purpose: These Cookies are used to track information about traffic
              to the Website and how users use the Website. The information
              gathered via these Cookies may directly or indirectly identify you
              as an individual visitor. This is because the information
              collected is typically linked to a pseudonymous identifier
              associated with the device you use to access the Website. We may
              also use these Cookies to test new pages, features or new
              functionality of the Website to see how our users react to them.
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Use of Your Personal Data
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              The Company may use Personal Data for the following purposes:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              {`To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.`}
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              To manage Your requests: To attend and manage Your requests to Us.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              We may share Your personal information in the following
              situations:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, for payment processing, to contact You.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              With other users: when You share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Retention of Your Personal Data
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </Text>
            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Transfer of Your Personal Data
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              {`Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.`}
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </Text>
            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Disclosure of Your Personal Data
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              Business Transactions
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Law enforcement
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Other legal requirements
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Comply with a legal obligation
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Protect and defend the rights or property of the Company
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Protect the personal safety of Users of the Service or the public
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Protect against legal liability
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Security of Your Personal Data
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </Text>
            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Detailed Information on the Processing of Your Personal Data
            </Heading>
            <Text as="p" fontSize="lg" py={4}>
              The Service Providers We use may have access to Your Personal
              Data. These third-party vendors collect, store, use, process and
              transfer information about Your activity on Our Service in
              accordance with their Privacy Policies.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              Analytics
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              We may use third-party Service providers to monitor and analyze
              the use of our Service.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Sendgrid.
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              Email Marketing
            </Text>

            <Text as="p" fontSize="lg" py={4}>
              We may use Your Personal Data to contact You with newsletters,
              marketing or promotional materials and other information that may
              be of interest to You. You may opt-out of receiving any, or all,
              of these communications from Us by following the unsubscribe link
              or instructions provided in any email We send or by contacting Us.
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              Google Analytics.
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Links to Other Websites
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              {`Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.`}
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Changes to this Privacy Policy
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              {`We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.`}
            </Text>
            <Text as="p" fontSize="lg" py={4}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Text>

            <Heading
              size={useBreakpointValue({ base: "sm", md: "md" })}
              pt={6}
              pb={4}
            >
              Contact Us
            </Heading>

            <Text as="p" fontSize="lg" py={4}>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </Text>

            <Text as="li" fontSize="lg" py={4}>
              By visiting this page on our website: https://sleakops.com
            </Text>
            <Text as="li" fontSize="lg" py={4}>
              By sending us an email: contact@sleakops.com
            </Text>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;

import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div>
      <>
        {/* history */}
        <div className="about-container py-5" style={{ backgroundColor: "#4267b2" }}>
          <div className="container">
            <div className="about-container-head">
              <h1 className="text-start text-white fw-bold">ABOUT</h1>
            </div>
            <div className="about-body py-5">
              <div className="row">
                <div className="col">
                  <div className="card p-3 p-md-5 my-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                    <h1 className="text-black">
                      K SUDHAKARAN,
                      <span className='text-secondary'>KPCC PRESIDENT</span>
                    </h1>
                    <div
                      className="card-content-container p-3 p-md-5 m-3"
                      style={{ backgroundColor: "#4267b2", borderRadius: 15 }}
                    >
                      <div className="row g-0">
                        <div className="col-lg-3 ">
                          <img
                            src="https://i.postimg.cc/K8G2ks5q/ksd1.png"
                            className="card-img-top w-100 h-auto rounded img-fluid"
                            alt="K Sudhakaran"
                          />
                        </div>
                        <div className="col-lg-9  ">
                          <div className="card-body">
                            <p className="card-text text-white fs-6">
                              I am humbled and privileged to have been entrusted with
                              the position of KPCC President by AICC President and the
                              central leadership of Indian National Congress. I am
                              indebted to the leadership for the confidence bestowed
                              in me to lead the party in the state of Kerala. As a
                              disciplined, committed Congressman, my sincere and
                              determined efforts have been to make our party a
                              political force has always been the welfare of the
                              common people. My efforts as a party functionary
                              throughout these years have been to ensure that the
                              Congress is a party that weak and marginalized in the
                              society can always rely on.
                            </p>
                            <p className="card-text text-white fs-6">
                              I have tried my best to stand by and voice the concerns
                              of the ordinary party workers and well-wishers of the
                              Congress party. As the KPCC President, my primary
                              concern has been to run the party with a renewed focus
                              on pro-people ideology and policies.
                            </p>
                            <p className="card-text text-white fs-6">
                              Indian National Congress always derives its strength
                              from the people. In the context of the social and
                              political challenges in India and Kerala at present,
                              Congress is the only party that can represent the voice
                              of the country.
                            </p>
                            <p className="card-text text-white fs-6">
                              Keeping the values that define Congress, let us work
                              together with unity and discipline to stand for all
                              sections of society and the shape the future of the
                              country and the state.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat the above structure for other cards */}
            </div>


            {/* About Image */}

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://i.postimg.cc/cCptstt3/history.png" className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.postimg.cc/fTd08C1f/history1.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.postimg.cc/qvd1kjK1/history2.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

          </div>
        </div>


        {/* history and formation */}
        <div className="history-container">
          <div
            className="history-container-head py-5"
            style={{ backgroundColor: "#4267b2" }}
          >
            <div className="container">
              <h1 className="text-start text-white fw-bold">
                History &amp; Formation
              </h1>
            </div>
          </div>
          {/* accordion */}
          <div className="formation-container py-5 container-fluid">
            <div className="container p-4">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item rounded-6 border-0 shadow mb-3">
                  <h2
                    className="accordion-header text-center"
                    style={{ color: "yellow" }}
                  >
                    <button
                      className="accordion-button border-bottom collapsed fw-semibold px-4 py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="true"
                      aria-controls="flush-collapseOne"
                    >
                      <h4 style={{ color: '#004167' }} className="m-0 fw-bold">
                        HISTORIOGRAPHY - An account of KPCC
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        height: "100%",
                        color: "white",
                        backgroundColor: "#4267b2"
                      }}
                    >
                      <p className="text-start">
                        The national freedom movement significantly influenced the
                        political history of Kerala. Here, an echo of the Salt
                        Satyagraha was heard. The entrance of lower castes into the
                        Vaikom temple via a Satyagraha was acknowledged as a direct
                        challenge to the rulers' and, by extension, the British
                        occupation's prevailing political and hierarchical supremacy.
                        In addition to Gandhiji's physical presence, numerous
                        Congress-led people's movements contributed to the Kerala
                        national movement against the British. As a result of their
                        leadership in various political movements opposing British
                        rule, Congress ultimately transformed the freedom struggle in
                        the state into a struggle for the rights of the state's
                        people, particularly millions of impoverished and marginalized
                        individuals, which had been violated.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item rounded-3 border-0 shadow mb-2">
                  <h2
                    className="accordion-header text-center"
                    style={{ backgroundColor: "yellow" }}
                  >
                    <button
                      className="accordion-button border-bottom collapsed fw-semibold text-center px-4 py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <h4 style={{ color: '#004167' }} className="m-0 fw-bold">
                        MILESTONES - The Role of Congress and the Development of the
                        National Movement
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        height: "100%",
                        color: "white",
                        backgroundColor: "#4267b2"
                      }}
                    >
                      <p className="text-start">
                        Since ancient times, the British Supremacy's ruthless
                        exploitation and dominance sparked countless rebellions; by
                        the turn of the 19th century, the enraged multitudes were
                        attempting to emancipate themselves from the burden of British
                        dominance. The Congress Party was a prominent advocate for
                        accountability and resistance against the heinous acts
                        committed by the Briti sh regime within the state. The
                        Congress party was extremely outspoken during that era in
                        opposition to prevalent social inequities, including
                        untouchability and social isolation.
                      </p>
                      <p className="text-start">
                        The Congress movement began to spread throughout India towards
                        the close of the 19th century. Numerous notable individuals
                        were affiliated with the Indian National Congress from Kerala.
                        Sir, G.P. Pillai. Included among them were C. Sankaran Nair
                        and Rairu Nambiar. C. The inaugural Malayali to preside over
                        congress sessions for an extended period of time was Sankaran
                        Nair, a native of Ottapalam. In the year 1897, he assumed the
                        presidency of the Amaravathi Session of the Congress. In
                        Malabar, Congress activities acquired momentum by 1919. The
                        influence of Gandhiji on the state congress grew during the
                        1920s. The Khilafat movement, Salt Satyagraha, and
                        noncooperation in Malabar sparked the nation's pride. Among
                        the early pioneers of the Malabar liberation movement were K.
                        K.P. Kesava Menon, Muhamed Abdurahiman Kelappan, and K. Nair,
                        Madhavan.
                      </p>
                      <p className="text-start">
                        This national movement was propelled by Mahatma Gandhi, who
                        also exerted an extraordinary impact on the state's liberation
                        struggle. The inferior social classes were regarded as
                        untouchables and were not permitted to traverse even the roads
                        leading to temples in Kerala. The backward social strata
                        gained access to the public roads adjacent to the Vaikom
                        temple through the nonviolent Guruvayoor Satyagraha movement
                        and the Vaikom Satyagraha movement, both of which were led by
                        Gandhiji. Sree Chithira Thirunal Balaramavarma Maharaja, the
                        sovereign of Thiruvithamkur, issued the Temple Entry
                        Proclamation in 1936, permitting individuals of all castes to
                        enter this temple.
                      </p>
                      <p className="text-start">
                        The British implemented stringent regulations on salt
                        production and levied high taxes on the country's citizens in
                        1930. Under the leadership of K., this infuriated the populace
                        of Kerala and the entire nation. Salt was produced at
                        Kelappan, where opposition to the law was encountered. Salt
                        laws were violated in numerous locations, with Payyannur and
                        Kozhikode being particularly affected, resulting in the
                        apprehension of hundreds of agitators. Other notable leaders
                        such as K.P. Kesava Menon, Ahmad Abdurahiman Muhammed, and K.
                        Similarly, Madhavan Nair was involved in each of these
                        state-wide movements.
                      </p>
                      <p className="text-start">
                        The character of the freedom movement in Thiruvithamkur was
                        notably dissimilar. The influence of caste organizations in
                        Thiruvithamkur was significant. Within the city limits, these
                        organizations advocated for social equity and the adequate
                        representation of disadvantaged segments of the population in
                        government positions and the legislature. In addition, the
                        Travancore State Congress was established, with notable
                        leaders including T.K. Madhavan, T.M. Varghese, C. Kesavan,
                        and Pattam Thanupilla. Its members fought for the rights of
                        the state's populace that had been violated during British
                        rule. Significant influencers in the formation of
                        Prajamandalam were Ikkanda Warrier and Panampilly Govinda
                        Menon, both of whom were born in Cochin.
                      </p>
                      <p className="text-start">
                        The Malabar District was not devoid of adherents of the Home
                        Rule Movement. Sri. Secretary of both the Congress Committee
                        and the Home Rule League was K.P. Kesava Menon. His political
                        activities galvanized the entire Malabar district. In Malabar,
                        the national movement experienced a surge in support and
                        influence during the First World War. Concurrently, the Muslim
                        populace of Malabar was incensed by the Khilafat movement. The
                        Malabar rebellion of 1921 stood as the most significant
                        occurrence associated with the political movement in Malabar
                        to this time. 61 of the 90 Mapillas who were being transported
                        as captives in a closed railway goods wagon from Tirur to
                        Coimbatore perished of suffocation during the "Wagon Tragedy,"
                        one of the tragic events associated with this rebellion. The
                        insurrection of 1921 constituted a significant national unrest
                        that challenged the authority of the British.
                      </p>
                      <p className="text-start">
                        The Congress personnel appeared to have been dormant in the
                        immediate aftermath of the uprising. In contrast, Sri. A few
                        other Congress employees, including K. P. Kesava Menon,
                        established the Mathrubhumi, a Malayalam daily based in
                        Calicut, with the intention of disseminating the Congress's
                        message. The Salt Satyagraha, which commenced in 1930 under
                        the guidance of Gandhiji, also influenced the state of Kerala.
                        The Salt Sathyagraha in Malabar primarily took place in
                        Payyannur. Long after this, Malabar eventually emerged as the
                        focal point of nationwide movements in Kerala.
                      </p>
                      <p className="text-start">
                        The British government regarded the Congress as a
                        "illegitimate organization" during the Second Phase of the
                        Civil Disobedience Movement in 1932. The participation of
                        thousands of men and women in the agitation in Malabar
                        rendered the government's threats futile. The withdrawal of
                        the Civil Disobedience Movement was followed by a schism in
                        the Congress Party viz. including both leftists and rightists.
                        The Communist Party of Malabar was established in 1939 from
                        the Congress party's radical faction. They abandoned the
                        Gandhian Principles after being inspired by the Russian
                        Revolution. However, they opposed the foreign government in
                        solidarity with the Congress.
                      </p>
                      <p className="text-start">
                        The Congress persisted in its ardent pursuit of liberty
                        following the conclusion of the Second World War. Even
                        subsequent to its liberation in August 1947, Malabar remained
                        an administrative region of the Madras state. The Madras
                        Legislature was augmented by four seats won by the Congress
                        Party of Malabar in the general election of 1951. The state
                        reorganization that occurred on November 1, 1956 resulted in
                        the creation of Kerala, a new state formed by the merger of
                        Travancore, Cochin, and Malabar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                  <h2
                    className="accordion-header text-center"
                    style={{ backgroundColor: "yellow" }} >
                    <button
                      className="accordion-button border-bottom collapsed fw-semibold text-center px-4 py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <h4 style={{ color: '#004167' }} className="m-0 fw-bold">
                        ACTIVITIES - Travancore and Cochin's integration and the
                        establishment of Kerala state
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        height: "100%",
                        color: "white",
                        backgroundColor: "#4267b2"
                      }}
                    >
                      <p className="text-start">
                        During the early British colonial period, the princely states
                        of Travancore and Cochin engaged in internal conflicts and
                        demonstrations to advocate for the rights of their respective
                        populations. The initial agitations were directed toward the
                        implementation of effective governance. Subsequently, an
                        ongoing resistance emerged in pursuit of political rights,
                        encompassing the representation and participation of
                        individuals at every level of government.
                      </p>
                      <p className="text-start">
                        Shri. Kesavappillai, a representative from Trivandrum,
                        attended the inaugural session of Congress that was convened
                        in Bombay on December 28, 1885. Travancore had a modest
                        representation in the early years of Congress formation at the
                        national level. Barrister G.P Pillai established the Malayalee
                        Memorial in 1891 to advocate for the rights of locals in
                        government service. The Congress convention held in Amaravati
                        was presided over by Shri. C. Sankaran Nair in 1897. A branch
                        of the Congress was established in Trivandrum in 1929, and the
                        party unit's secretary was Barrister A.K Pillai. In the same
                        year that the KPCC was established in Ottapalam, Later in
                        1921, Riverdrum also established a congress committee.
                      </p>
                      <p className="text-start">
                        Travancore was immediately affected by the civil disobedience
                        movements that Gandhiji initiated in 1920. The state's
                        Congress Committee coordinated demonstrations, processions,
                        and a boycott of British products. Travancore experienced one
                        of its most turbulent political unrest periods in its history
                        during the early 1930s. Commencing as a form of resistance
                        against the constitutional reforms implemented in 1932, the
                        Nivarthana movement emerged. The agitation ultimately resulted
                        in success, notwithstanding the repressive measures
                        implemented by the government. Precise deliberations were
                        conducted regarding each community in response to the
                        agitation.
                      </p>
                      <p className="text-start">
                        The Travancore State Congress was established in 1938.
                        Presided over initially was Pattom Thanu Pillai. C. The State
                        Congress also included notable figures such as Kesavan, P. K.
                        Kunju, and T.M. Varghese. The objective of the nascent
                        organization was to secure a government that was entirely
                        accountable to the citizens of Travancore.In Travancore, the
                        Quit India Movement failed to elicit any violent opposition.
                        However, the political landscape of Travancore became
                        overshadowed by ominous clouds during the postwar era. The
                        proposal for constitutional reforms put forth by Sir C. P.
                        Ramaswamy Aiyer in January 1946 included the establishment of
                        an irrevocable executive branch, inspired by the "American
                        model." The State Congress deemed the proposal to be unlawful
                        and rejected it.
                      </p>
                      <p className="text-start">
                        A sequence of extraordinary occurrences that transpired
                        between 1946 and 1947 came to a dramatic conclusion with the
                        establishment of responsible government in Travancore. When
                        did Sir begin in July 1947? C. P. Ramaswamy Iyer declared that
                        Travancore would attain independence on the date of the
                        British withdrawal from India. Both within and without the
                        state, the Diwan's proclamation sparked considerable
                        controversy. The ineffectual application of force by the
                        government in response to the statewide mass movement
                        spearheaded by the Congress party was evident. After the Diwan
                        was assaulted, he departed Travancore and tendered his
                        resignation from office. The state's quest for accountable
                        governance concluded triumphantly with the conclusion of that
                        conflict. Pattom Thanu Pillai, T. M. Varghese, and C. T.
                        established the first well-known ministry in Travancore. March
                        24, 1948 marked Kesavan's ascension to authority.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                  <h2
                    className="accordion-header text-center"
                    style={{ backgroundColor: "yellow" }}
                  >
                    <button
                      className="accordion-button border-bottom collapsed fw-semibold text-center px-4 py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour" >
                      <h4 style={{ color: '#004167' }} className="m-0 fw-bold">
                        STRUCTURE - Formation of Kerala State through the union of Travancore and Cochin
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        height: "100%",
                        color: "white",
                        backgroundColor: "#4267b2"
                      }}
                    >
                      <p className="text-start">
                        The national freedom movement significantly influenced the
                        political history of Kerala. Here, an echo of the Salt
                        Satyagraha was heard. The entrance of lower castes into the
                        Vaikom temple via a Satyagraha was acknowledged as a direct
                        challenge to the rulers' and, by extension, the British
                        occupation's prevailing political and hierarchical supremacy.
                        In addition to Gandhiji's physical presence, numerous
                        Congress-led people's movements contributed to the Kerala
                        national movement against the British. As a result of their
                        leadership in various political movements opposing British
                        rule, Congress ultimately transformed the freedom struggle in
                        the state into a struggle for the rights of the state's
                        people, particularly millions of impoverished and marginalized
                        individuals, which had been violated.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                  <h2
                    className="accordion-header text-center"
                    style={{ backgroundColor: "yellow" }}
                  >
                    <button
                      className="accordion-button border-bottom collapsed fw-semibold text-center px-4 py-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive">
                      <h4 style={{ color: '#004167' }} className="m-0 fw-bold text-start">
                        DEVELOPMENTS - Developments in politics subsequent to the
                        establishment of the state and Congress Party
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        height: "100%",
                        color: "white",
                        backgroundColor: "#4267b2"
                      }}
                    >
                      <p className="text-start">
                        The inaugural general election for the State Legislature of
                        Kerala took place in February 1957. A handful of independent
                        candidates and the Communist Party of India secured 65 of the
                        126 seats in the legislature. The Communist Ministry was
                        established under the Chief Minister of Egypt on April 5,
                        1957, following the end of Presidents Rule. The authority was
                        seized by M. S. Namboothiripad. Opposition arose in every
                        region of the state in response to the Communist Government's
                        anti-people policies and ruthless methods of cell rule. This
                        resulted in countless agitations throughout the state,
                        ultimately culminating in the regime's overthrow in 1959.
                        Kerala once more was placed under the presidency.
                      </p>
                      <p className="text-start">
                        Kerala State Legislature elections were re-conducted in
                        February 1960. In opposition to the Communist Party, the
                        Congress, the P.S.P., and the Muslim League formed an
                        alliance. The Congress-P.S.P coalition established a ministry
                        with Pattom subsequent to the alliance's triumph. The
                        swearing-in of Chief Minister A. Thanu Pillai on February 22,
                        1960 marked the conclusion of President's Rule. Pattom was
                        born in September of 1962. Governor of the state of Punjab, A.
                        Thanu Pillai, was appointed to the position. R. The chief of
                        the Congress Party, Sankar, was appointed as the Chief
                        Minister. The ministry tendered its resignation on September
                        10, 1964. Kerala State once more came under the governance of
                        the President subsequent to the downfall of the Sankar
                        Ministry. The Marxist Communist Party's division within the
                        Communist Party was the most significant political development
                        of the era.
                      </p>
                      <p className="text-start">
                        All political parties, including Congress, ran independently
                        in the 1965 midterm elections, lacking any electoral alliance.
                        Thus, in the new legislature, none of the parties received a
                        clear majority of representatives. President's Rule was
                        instituted in Kerala on March 24, 1965, subsequent to the
                        dissolution of the recently elected Legislative Assembly.
                      </p>
                      <p className="text-start">
                        Elected to power in the General Election of 1967 under the
                        leadership of E. Marx was the Communist Party. Namboothiripad,
                        M. S. M. Nonetheless, this ministry was overthrown in October
                        1969, and on November 1, 1969, a new non-Marxist coalition
                        ministry was inaugurated under the leadership of C.Achutha
                        Menon, the leader of the C.P.I. The Congress party was among
                        this front's principal allies.
                      </p>
                      <p className="text-start">
                        In order to pursue a new mandate, the Achutha Menon Ministry
                        tendered its resignation on August 1, 1970. A unified front
                        led jointly by the Communist Party of India and the Indian
                        National Congress won an overwhelming majority in the
                        September 1970 General Election. A newly established ministry
                        led by C. Attained to power was Achutha Menon. Nevertheless,
                        the general elections that were scheduled to occur in Kerala
                        in 1976 were rescheduled subsequent to the President of
                        India's proclamation of Emergency in June 1975.F
                      </p>
                      <p className="text-start">
                        During the period of emergency, the Congress party supported
                        Indiraji, and Kerala experienced a remarkably tranquil
                        political and social climate. March 1977 saw the convening of
                        general elections subsequent to the withdrawal of the
                        Emergency. The elections were won by a coalition lead by the
                        Congress. March 23, 1977 marked the inauguration of a new
                        ministry led by K. Karunakaran, the chief of the Congress
                        Legislature Party. A month later, the Chief Minister was
                        compelled to tender his resignation, putting an end to the
                        Karunakaran Ministry. Following the collapse of the
                        Karunakaran Ministry, a new ministry led by A.K. was
                        established. Respected Antony. This ministry occupied power
                        between 1977 and 1978. P.K. presided over the newly
                        established Ministry that commenced operations on October 29,
                        1978. Under the leadership of Vasudevan Nair, the C.P.L.
                        remained in power until October 12, 1979. Another Ministry,
                        which was led by the leader of the Muslim League, C.H. In
                        1979, Muhammad Koya was in office between October 12 and
                        December 5. On December 5, 1979, following the resignation of
                        the Koya ministry, President's Rule was proclaimed. In January
                        1980, elections for the Legislative Assembly were conducted.
                        The Ministry of the Democratic Front on the left, led by E.K.
                        Nayanar, the chairman of the Marxists, assumed office on
                        January 25, 1980.
                      </p>
                      <p className="text-start">
                        On October 20, 1981, the Nayanar Ministry was deposed as a
                        result of the Congress group's cessation of support; Kerala
                        was once more placed under President's Rule. K. established a
                        new ministry under the Congress. December 25 marked the
                        inauguration of Karunakaran. However, his survival was
                        short-lived. An additional period of President's Rule was
                        imposed in Kerala between March 17 and May 23, 1982.
                      </p>
                      <p className="text-start">
                        The Congress-led United Democratic Front, which won the
                        general elections for the Kerala Assembly in May 1982, assumed
                        power on May 24, 1982, with K. Mr. Karunakaran is the Chief
                        Minister. It maintained its position for an entire term. The
                        Kerala Legislative Assembly general election in March 1987
                        resulted in the United Democratic Front's defeat. On March 25,
                        1987, the L.D.F ministry, led by C.P.M leader E.K. Nayanar,
                        assumed power in Kerala. The ministry was dissolved by the
                        Chief Minister in 1991, and he was presented with a new
                        mandate prior to the customary conclusion of his term in
                        office. The party U.D.F., which was headed by Congress, seized
                        power. K. Karunakaran was installable as chief minister.
                        Kirunakaran tendered his resignation on March 16, 1995, while
                        A.K. Twenty-first March 1995 saw Antony's inauguration as the
                        new chief minister. May of that year witnessed the occurrence
                        of general elections in 1996. With a simple majority, the LDF
                        reestablished itself as the ministry's leader under E.K.
                        Nayanar assumed authority. He resigned at the end of his term,
                        followed by Shri, after the Congress-led UDF won an
                        overwhelming victory in the 2001 assembly elections (100 out
                        of 140 seats). Sworn in as the chief minister is Oommen
                        Chandy.
                      </p>
                      <p className="text-start">
                        At this time, a Congress-led government led by Chief Minister
                        Oommen Chandy and collaborating with the UDF are prioritizing
                        the state's development and assisting its impoverished and
                        marginalized citizens. In addition to supporting the
                        government's initiatives, the Congress party, led by Shri.
                        Ramesh Chennithala, engages in a variety of activities to
                        publicize the government's accomplishments and safeguard it
                        from the opposition parties' politically motivated attacks.
                        With improved coordination, the Party leadership and
                        government instill confidence in the party with regard to
                        policy matters. The party and government will take the lead in
                        promoting rapid development, communal harmony, and care for
                        all those in need of government assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap Bundle with Popper */}
      </>

    </div>
  )
}

export default About
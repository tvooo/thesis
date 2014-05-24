# Discussion & Reflection

The following chapter discusses the results of the user testing (evaluation) with respect to the goals presented in the introduction. It also reflects on the design process and makes suggestions for improvements in both the process and the concept.

<!-- quantitatives -->

## Quantitative reflection

From a quantitative standpoint, it is hard to tell if the *Scope Inspector* package is useful or successful. The following two metrics are taken into consideration.

Number of downloads
  ~ The number of downloads, as presented by the package website\footnote{See \url{https://atom.io/packages/scope-inspector}}, is a metric that has to be compared to others to drive a meaningful conclusion. The total number of Atom installations is unknown to the author, however, it is possible to make an estimate: The package *Find and Replace*\footnote{https://atom.io/packages/find-and-replace} is part of Atom’s standard distribution and thus should have been downloaded about the same amount of times\footnote{This estimate does not include custom builds of Atom, for example by compilation of the source on a Windows or Linux platform.}. By the time of writing, *Find and Replace* has been downloaded 14.000 times. Compared to this, the number of downloads for *Scope Inspector* seems low, however, one has to take different circumstances into consideration:

    1. The Atom editor, and thus the *Find and Replace* package, has been around much longer than the *Scope Inspector* package. The first release is dated to September 17, 2013\footnote{See \url{https://github.com/atom/find-and-replace/tree/v0.2.0}}. Thus, the package has been around for about 8 months, while this prototype has only been around for two weeks by the time of writing.
    2. The *Find and Replace* package provides a core functionality of every text editor, whereas the *Scope Inspector* package fulfills a specialized task for a narrow target group.
    3. The *Find and Replace* package comes with each Atom installation. However, to even *get to know* about the Scope Inspector package, one has to search for stumble upon it.

    Based on these arguments, one could find a package with more similar characteristics to do a comparison. The one that comes closest in terms of target group and functionality is the JSHint plug-in for Linter package, which provides a JavaScript linting tool\footnote{See \url{https://github.com/AtomLinter/linter-jshint/tree/v0.0.1}}. From its first release on April 18 until the time of writing, the package had been installed about 4900 times, which is about 30 times the number of downloads of Scope Inspector in twice the time. Given the familiarity of linting tools, which are part of most JavaScript developers’ workflows, and the novelty of Scope Inspector, one can conclude that the Scope Inspector’s number of downloads is moderately high. However, while the number of downloads may proof that there exists some interest in this sort of language tool, it is not a sign for its usefulness.

Analytics
  ~ Including me, analytics have only been enabled by five users. There may be a couple of reasons for this low number.

    1. Analytics tracking is disabled by default for ethical reasons: I do not want to track users without them knowing and explicitly giving their consent.
    2. Users do now want to opt-in to analytics tracking, or consider it to be unimportant. In this case, a stronger point for the benefits of tracking for both the user and me should be made.
    3. The package is only used by a very low number of users. This is probably true, but the difference between the five users who enabled analytics and the 150 who downloaded it seems to be too high.
    4. The request to opt-in is too subtle and not visible enough. It is quite possible that users do not read the README file thorougly. In this case, the option to opt-in has to be made more prominent. It can be moved up in the README file and emphasized better. Another approach would be to advertise the tracking (along with this research project) in the package-itself, for example by showing an information window on first activation of the package.
    5. The tracking code is broken. This is not very possible, as in this case, the analytics tool would not have collected any data. However, it collected data throughout the two week testing period.

    It is probable that opt-in by default would have raised the number of tracked users significantly. However, as I stated before, this would be strongly against my ethical position and I am convinced that there are other ways to gain relevant testing data. The next most promising approach is to raise the visibility of the opt-in option and market the research better, as stated above in (2) and (4).

    With the low number of analytics opt-ins, it is hard to draw a conclusion on the usefulness of the package and its single components. However, as the sidebar was being enabled each day of the testing period with the exception of one, it can be claimed that the package was actively used by all of the opted-in users, and not just activated but unused.

<!-- qualitatives -->

## Qualitative reflection

More meaningful than the quantitative metrics are qualitative results. The original goal was to evaluate the prototype by distributing it to the users and let two developers use it for at least one week in a real working environment. However, as mentioned in the previous chapter, the recruited developers were unable to use the prototype in their daily work, because they were mainly developing with \ac{html} and \ac{css} during that time period. For that reason, I had to rely on other ways of testing: remote interviews and unstructured feedback via social media channels.

Remote interviews
  ~ The testing scenario was not optimal due to the following circumstances:

    1. All users except one were only available for remote testing. The one available locally was using JavaScript only casually and not on a daily basis. It would have certainly been more fruitful to work with professional developers locally in Malmö. However, I failed to recruit developers in the short period of time available—especially because of the narrow target group of the concept—and thus relied mostly on developers I knew from previous work in Germany. With a less restricting time limit, this circumstance could most possibly be improved upon.
    2. None of the users who was available for an interview was able to test the prototype during a whole week in a real working environment. Instead, only in situ testing with prepared and existing source code could be conducted. Given more time, it might have been possible to recruit more full-time developers. Also, the two developers already recruited could have participated in testing at a later point in time.

    Given the unfortunate circumstances, the feedback gathered through remote interviews is detailed and useful. It can be used as a solid grounding to enhance the prototype in future iterations. The only point where the feedback comes short is in long-term testing—the question how well the prototype can be integrated into existing development workflows cannot be answered satisfactorily.

Social Media Channels
  ~ Social Media have been used a marketing channels as well as a feedback channel.


- twitter verbreitung über kahlil war gut, könnte aber besser sein (key figuresin da scene)
- github 2 bugs gemeldet, sehr gut. definitiv gut als open source zu machen.
- twitter nettes feedback, auch von leuten die ich nicht kenn

<!-- summary -->

- Atom/APM is new, a growing platform and growing community, not long established.
- Nächstes mal: mehr Zeit. Eine reifere Plattform wählen (allerdings kann man das Wachsen ja auch als Schrittbrett nehmen). Vergleich mit Theseus, das schon einige Monate da war…

- thus, it is hard to define what is a „successful“ package
- konnte ich das voraussehen?

# Conclusion & Outlook

<!-- knowledge contributions -->

Welche knowledge contribution hab ich wirklich machen können?

- Characteristics of well-integrated language tools that are important for professional developers to support their work. **ja**
- A way of evaluating designs with a specific, professional target group **ja?**
- The implications of testing prototypes with a very limited user group in the open source community **oh jes…**
- Using an interaction design approach to create open source software opens up the field. It yields results that are most probably different from what typical innovation processes in open source would have resulted in. **ja! nicht anticipated, open innovation kram und so**

<!--
https://en.wikipedia.org/wiki/Open_innovation#Open_source_versus_open_innovation

https://hacks.mozilla.org/2014/05/developer-tools-feedback-channels-one-week-in/
-->
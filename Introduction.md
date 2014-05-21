# Introduction

Creating computer programs is a difficult and complex task. Nowadays, software developers can rely on a number of tools to help them do their tasks. Often, these tools are integrated by a so-called \ac{ide}.

Ansatz: identify characteristics of well-integrated development tools, apply to the problem of scope, implement, validate. Passt das?

So-called static analysis tools are especially helpful in maintaining code quality.
- devs rely on tools
- ides integrate tools
- static analysis tools can help at author-time, like linters
- problem in many languages: scope
- can ides help?
- alternative way of looking at a program
- Target group: professional (js) developers

*Scope* is a phenomenon of computer programs related to the validity of variables. By looking at the structure of scope, a program can be explored from a different perspective, and certain pitfalls that lead to programming errors can be uncovered. Scope structure can be explored using static analysis tools, and therefore be usable during author-time already.



What will be my knowledge contribution?

-anticipated:knowledge contribution: how do i evaluate designs like this, e.g. ide tools, dev tools, for a user groups like this?

-not anticipated: not anticipated knowledge contribution: using the ixd approach for an open source project yielded new results, a more open field, than os approaches usually do (they copy more and adapt and stuff)


- Which characteristics are good for integrating language tools into the dev workflow?
- Best way to integrate code evaluation, a new way of looking at software, into the creation process

Following a \ac{ucd} process, the project described in this thesis targets the needs of professional developers with advanced experience. The final design is built for the JavaScript programming language, but the concept of scope presents difficulties in nearly every language in use. The knowledge gained during the process is thus expected to be applicable to other programming languages as well.

Integrating a solidly implemented, high-level prototype in the Atom text editor will demonstrate the value of the concept. It will be validated by means of both quantitative and qualitative data using analytics, general feedback on the web, and interviews.

The goal of this thesis is twofold. On the one hand, the author wants to identify characteristics of well-integrated software development tools.

Mein roter Pfaden, eins von
- Loose Integration von language tools in text editoren, statt full-fledged IDEs
- Static analysis tools inline, statt auf der command line
- IDE vs code/text editor
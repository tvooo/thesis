# Introduction

<!-- IDEs -->

Creating computer programs is a difficult and complex process. \glspl{ide} integrate a number of tools helping software developers do their work, and are indispensable in a modern development workflow. One class of those tools are *language tools*, which help with the actual programming language (as opposed to e.g. build and source control tools) to reduce defects and misconceptions \cite{hidayat}. However, research by \citeasnoun*{johnson2013} on \gls{staticanalysis}\footnote{Static analysis is the analysis of computer software that is performed without actually executing the program.} tools suggests that they are not as widely used, although they proof to be helpful. This thesis approaches the design of language tools by means of interaction design methodology, through a user-centered design process and by the example of *scope*.

<!-- Scope -->

In programming, scope is an abstract concept to define the validity of variables. By looking at the structure of scope, a program can be explored from a different perspective than just its source code and symbols, and certain pitfalls that may lead to program defects can be uncovered. In languages that implement lexical scoping, such as \gls{javascript}, scope analysis can be done statically (static analysis), and can therefore be applied during author-time already. The research that was done in the course of this thesis shows that scope is not yet appropriately addressed by language tools. It is therefore used as an example for designing, implementing and evaluating a language tool targeting professional developers. A more in-depth explanation of scope is given in chapter \fullref{concepts}.

## Process

This thesis project follows a \ac{ucd} process, which is reflected in the structure of this document. Preliminary theoretical groundings are presented in chapter two, which introduces software development environments and their history and role in the development workflow. It also introduces the target user group. Chapter three describes the exploration phase by means of a survey and interviews with professional software developers to identify characteristics of well-integrated development tools. Subsequently, the research framework is narrowed down towards *scope*, which is described in chapter four. Following in chapter five, canoncial and related work examples are identified and listed while the ideation process is exposed. The design itself is conducted in three iterations: sketches, a scripted prototype and a working prototype. Chapter six presents these iterations and explains the design decisions that have been made. Integrating a solidly implemented, high-level prototype with the Atom text editor demonstrates the feasibility of the concept, which is further verified through user testing. Findings from this phase are discussed in chapter seven. Finally, chapter eight draws a conclusion and gives an outlook regarding the design of programming language tools.

The project described in this thesis targets the needs of professional developers with advanced experience. The final design is built for the JavaScript programming language, but the concept of scope presents difficulties in nearly every language in use. The knowledge gained during the process is thus expected to be applicable to other programming languages as well.

## Knowledge Contribution and Limitations

This thesis explores how language tools for professional developers can be designed and evaluated. It creates knowledge in the field of interaction design by contributing the following:

- Characteristics of well-integrated language tools that are important for professional developers to support their work.
- A case study of evaluating a design with a specific, professional target group.
- The implications of testing prototypes with a narrow user group in the open source community.
- Using an interaction design approach to create open source software opens up the field. It yields results that are most probably different from what typical innovation processes in open source would have resulted in.

In addition to the interaction design knowledge, this thesis makes the following contributions to the open source community:

- A working, extendable open source prototype in the form of a plug-in for the Atom IDE.
- A static analysis library to extract JavaScript scope information. The library is  released with the Atom plug-in\footnote{The library is planned to be released separately in the future.} and can be re-used in any software to analyze scope in JavaScript.

#### Limitations

The short time period in which this project was pursued (8.5 weeks) creates some limitations. On the one hand, the final prototype—though being a high-fidelity working prototype—has a limited set of features as well as some bugs that influence the evaluation outcome. On the other hand, the focus of this thesis has to be very narrow, which is why some of the findings are difficult to apply to other programming environments, programming languages, and less experienced developers.


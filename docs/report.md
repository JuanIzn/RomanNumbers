---
title: "Creating a CI/CD system for the roman converter"
author: "Juan Jesús Iznardo"
format:
  typst:
    number-sections: false
    toc: true
# comando: quarto preview docs/report.md --to typst --no-browser
---
{{< pagebreak >}}

# System Summary

A robust CI/CD infrastructure that ensures the continuous quality and reliability of the Roman Number Converter application. The system safeguards production by enforcing automated validation and seamless deployment with zero manual intervention.

**Live URL:** https://juanizn.github.io/RomanNumbers/

**Repo:** https://github.com/JuanIzn/RomanNumbers/



# Key Results 


- Automated CI/CD: The CI/CD pipeline automatically blocks any deployment attempt if unit tests or linting rules fail, ensuring that only stable code reaches the server.
- Deployment cycle: Any verified push or merge to the main branch is live and accessible on the global website within 60 seconds.
- Zero downtime: The deployment strategy ensures the application remains 100% available to users during the update process.


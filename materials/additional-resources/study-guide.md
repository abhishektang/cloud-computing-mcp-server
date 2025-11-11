# Cloud Computing Exam Study Guide (Based on Available Papers)

This guide summarizes high-yield topics and practice prompts based on the available sample exam (2024) and common patterns for Cloud Computing courses. Use it to focus revision and simulate exam conditions.

---

## Exam structure snapshot

- Section A: Multiple Choice (20 marks)
- Section B: Short Answers (30 marks)
- Section C: Long Answers (50 marks)

Weighting leans heavily toward design/analysis (Sections B/C). Expect conceptual breadth in Section A.

---

## High‑yield topic map

1) Cloud foundations
- Service models: IaaS, PaaS, SaaS (know definitions, responsibilities, typical examples)
- Essential characteristics (NIST): on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service
- Deployment models: public, private, hybrid (trade-offs, use-cases)

2) Virtualization and containers
- Hypervisors (Type 1 vs Type 2), VM isolation, overhead
- Containerization vs virtualization (namespaces, cgroups, images, portability)
- Typical platform tooling (Docker, Kubernetes basics)

3) Architecture and operations
- Load balancing strategies (L4/L7, sticky sessions, blue/green, canary)
- Auto-scaling (horizontal vs vertical, metrics, cooldowns)
- State and data: database replication (master/primary, read replicas, quorum, RPO/RTO)
- Reliability patterns (circuit breaker, retries/backoff, idempotency)

4) Security and compliance
- Identity and access: IAM roles/policies, least privilege
- Data protection: encryption in transit/at rest, key management
- Multi-tenancy risks, isolation, shared responsibility model
- Compliance considerations (logging, monitoring, audit trails)

---

## Practice prompts (by section)

Section A (MCQ)
- Identify which options are true/false regarding service models, virtualization benefits, and deployment choices.
- Quick checks: elasticity vs scalability, multi-tenancy vs resource pooling, DaaS as a service model.

Section B (Short answers)
- Define cloud computing and list the five essential characteristics.
- Compare public, private, and hybrid deployments with two pros/cons each.
- Explain containers vs VMs; include startup time, density, isolation, typical use-cases.

Section C (Long answers)
- Design a cloud-based application covering: load balancer choice, auto-scaling policy, stateless services, session management, and database replication topology. Discuss trade-offs and failure handling.
- Security analysis for a cloud workload: data protection strategy, IAM model, network segmentation, logging/monitoring for compliance, and threat mitigation.

---

## What to memorize vs understand

Memorize
- NIST 5 characteristics of cloud computing
- Service models and responsibilities
- Deployment models and one canonical example each

Understand and be able to reason about
- Why containers vs VMs; when to choose each
- How load balancing + auto-scaling interact with stateful components
- Replication consistency vs availability trade-offs at a high level
- Practical steps to implement least privilege and data encryption

---

## Rapid revision checklist

- [ ] Define cloud computing and NIST characteristics from memory
- [ ] Differentiate IaaS/PaaS/SaaS with examples
- [ ] Public vs Private vs Hybrid: use-cases, pros/cons
- [ ] Containers vs VMs: isolation, performance, orchestration
- [ ] Load balancing patterns and when to use them
- [ ] Auto-scaling triggers and safe policies
- [ ] Database replication: read vs write paths, failover
- [ ] Security: IAM, encryption, multi-tenancy isolation, compliance basics

---

## Suggested 3-hour exam pacing

- Section A (20 mins): First pass MCQs; mark uncertain, return once
- Section B (45–55 mins): 3 short answers; aim ~10–12 mins each + buffer
- Section C (95–105 mins): 2 essays; outline first (3–4 mins), then write; leave 5–10 mins to review diagrams/assumptions

---

## Notes on source coverage

Only the 2024 sample exam text was available for direct parsing. PDFs for other years are present but not yet text-extracted in this workspace. The topics above align with the sample exam and standard Cloud Computing syllabi; integrate additional insights if more past papers become text-accessible.

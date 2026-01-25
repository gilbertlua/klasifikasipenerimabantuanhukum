# C4.5 Classification for Legal Aid Recipients

## 📌 Summary

This project implements a **C4.5 decision tree classifier** to determine eligibility for legal aid recipients. The C4.5 algorithm is a well-known machine learning technique used to build decision tree models that handle both numerical and categorical data and make clear classification decisions based on patterns in historical data. :contentReference[oaicite:0]{index=0}

---

## 📂 Overview

This repository provides:

- A **C4.5 classifier implementation** applied to a dataset of legal aid applicants.
- **Data preprocessing** and **model training** steps to generate a decision tree model.
- A classification pipeline to evaluate eligibility categories for legal aid based on input features.
- Example code demonstrating how to run the classifier and interpret results.

---

## 🧠 About C4.5

The **C4.5 algorithm** is an extension of the ID3 decision tree algorithm. It selects the attribute that offers the highest *normalized information gain* to split nodes and recursively builds a tree that predicts target classes. It supports both continuous and categorical features and handles missing values. :contentReference[oaicite:1]{index=1}

---

## 🚀 Features

- Builds a **decision tree model** for eligibility classification.
- Supports **mixed feature types** (numerical + categorical).
- Outputs human-readable **decision rules**.
- Tutorial / example usage included.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Python | Core implementation |
| Machine Learning | Classification using C4.5 |
| Dataset | Historical applicant records |

---

## 🧪 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/gilbertlua/c4.5classificationlegalaidrecipients.git
    ```
2. **Install dependencies**
    ```bash
    1. install mini conda: https://docs.conda.io/en/latest/miniconda.html
    2. create conda env: 
    conda create -n c45-legal-aid python=3.10
    3. activate:
    conda activate c45-legal-aid
    ```
3. **Run the classifier**
    ```bash
    python ml/train_model.py
    ```

4. **Inspect output**
    - Generated decision tree
    - Prediction results for eligibility classes
5. **Run the application**
    ```bash
    python api/host.py
    ```
---

**Gilbert Lua**  **[LinkedIn](https://www.linkedin.com/in/gilbert-lua-ba0b60202/):** 

* **Portfolio:** 


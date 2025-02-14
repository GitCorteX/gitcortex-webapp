# Contributing to GitCortex  

Thank you for your interest in contributing to **GitCortex**! 🚀  

We welcome contributions from the community to improve **GitCortex**, whether it's fixing bugs, adding features, or improving documentation. Please read this guide before contributing.  

---

## 📌 How to Contribute  

### 🛠️ 1. Fork & Clone the Repository  
1. Click the **Fork** button at the top-right of this repo.  
2. Clone your fork locally:  
   ```sh
   git clone https://github.com/YOUR-USERNAME/gitcortex-REPO.git
   cd gitcortex-REPO


3. Add the upstream repository
   ```sh
   git remote add upstream https://github.com/GitCortex/gitcortex-REPO.git
   ```

---

#### 🔧 2. Set Up the Development Environment

#### **For Backend (****`gitcortex-backend`****)**

1. Create a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
3. Create a `.env` file and add your API keys:
   ```sh
   GITHUB_TOKEN=your_token_here
   DATABASE_URL=your_database_url_here
   ```

#### **For Web App (****`gitcortex-webapp`****)**

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

#### **For Mobile App (****`gitcortex-mobile`****)**

1. Install dependencies:
   ```sh
   flutter pub get
   ```
2. Create an `.env` file and configure API settings.

---

### 🏗️ 3. Create a New Branch

```sh
git checkout -b feature-name
```

---

### 📝 4. Make Changes & Commit

1. Write clean, well-documented code.
2. Follow our **coding standards**.
3. Run tests before committing.

```sh
git commit -m "Added new feature"
git push origin feature-name
```

---

### 🔄 5. Submit a Pull Request (PR)

- Go to **GitHub → Your Fork → Compare & Pull Request**
- Describe your changes clearly.
- Link related **issues** if applicable.

---

### 🚀 Contribution Guidelines

✅ Follow **GitCortex Coding Standards** (Python PEP-8, React best practices, Flutter guidelines)\
✅ Add **comments & docstrings** for clarity\
✅ Write **unit tests** for any new feature\
✅ Keep **PRs small & focused**

---

### ❌ Do Not

❌ Push changes directly to the `main` branch\
❌ Submit PRs without testing\
❌ Share any **sensitive credentials** in the code

---

### ❤️ Thank You!

Your contributions help make **GitCortex** better! 💡✨\
Need help? Contact us at **[EMail](mailto\:agastyagm2@gmail.com)**.

---

📌 **Note:**\
For **backend & web app**, contribution is currently **restricted to core team members**. The mobile app (`gitcortex-mobile`) is **open-source** and accepts external contributions.


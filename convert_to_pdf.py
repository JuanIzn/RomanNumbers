#!/usr/bin/env python3
"""
Convert markdown test cases documentation to PDF
"""

try:
    from weasyprint import HTML, CSS
    
    html_file = "Juan.Iznardo.alu142910.html"
    pdf_file = "Juan.Iznardo.alu142910.pdf"
    
    # Convert HTML to PDF
    HTML(html_file).write_pdf(pdf_file)
    print(f"✓ Successfully created {pdf_file}")
    
except ImportError:
    print("weasyprint not installed. Attempting alternative method...")
    try:
        import subprocess
        result = subprocess.run(
            ["wkhtmltopdf", "Juan.Iznardo.alu142910.html", "Juan.Iznardo.alu142910.pdf"],
            capture_output=True
        )
        if result.returncode == 0:
            print("✓ Successfully created Juan.Iznardo.alu142910.pdf using wkhtmltopdf")
        else:
            print(f"wkhtmltopdf error: {result.stderr.decode()}")
    except FileNotFoundError:
        print("wkhtmltopdf not found either.")
        print("\nAlternative: You can open the HTML file and print it to PDF manually:")
        print("1. Open Juan.Iznardo.alu142910.html in your browser")
        print("2. Press Cmd+P (or Ctrl+P on other systems)")
        print("3. Select 'Save as PDF' and save with the name: Juan.Iznardo.alu142910.pdf")
        
except Exception as e:
    print(f"Error: {e}")
    print("\nPlease use one of these methods:")
    print("1. Open the HTML file in a browser and print to PDF")
    print("2. Install: pip install weasyprint")
    print("3. Install: brew install wkhtmltopdf")

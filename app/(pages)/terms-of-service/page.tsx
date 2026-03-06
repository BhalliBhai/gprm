import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for GPRM — the free GitHub Profile README Generator. Understand your rights and responsibilities when using our service.",
};

export default function TermsOfService() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">Terms of Service</h1>
        {/* <p className="text-lg text-slate-600 dark:text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
        <p className="text-lg text-slate-600 dark:text-slate-400">Last updated: March 1, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-700 dark:text-slate-300">
        <p>
          By accessing or using the ReadmeGen website and service (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">volunteer_activism</span> 1. Use License
        </h2>
        <p>
          ReadmeGen provides a free tool for generating Markdown files to be used on GitHub profiles. 
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>You are granted a non-exclusive, non-transferable license to use the Service strictly in accordance with these Terms.</li>
          <li>You own the copyright to the content you input and generate using this tool.</li>
          <li>The underlying code, design, and structure of the ReadmeGen application itself are proprietary and may not be copied, modified, or distributed without permission.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">warning</span> 2. Disclaimer
        </h2>
        <p>
          The materials on ReadmeGen&apos;s website are provided on an &apos;as is&apos; basis. ReadmeGen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p>
          Further, ReadmeGen does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website, the generated markdown, or any third-party APIs utilized within the generated content.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">block</span> 3. Limitations
        </h2>
        <p>
          In no event shall ReadmeGen or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ReadmeGen&apos;s website, even if ReadmeGen or a ReadmeGen authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">public</span> 4. Third-Party Links and APIs
        </h2>
        <p>
          The Service generates code that embeds elements from third-party services (such as GitHub Readme Stats and Devicons). ReadmeGen has not extensively reviewed all of the sites linked to its website and is not responsible for the contents or continued uptime of any such linked site or service. The inclusion of any link does not imply endorsement by ReadmeGen. Use of any such linked website or service is at the user&apos;s own risk.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">build</span> 5. Modifications
        </h2>
        <p>
          ReadmeGen may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">balance</span> 6. Governing Law
        </h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
}

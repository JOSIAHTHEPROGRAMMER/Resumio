import {
  ArrowLeft,
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);

  const colors = ["#0891b2", "#2563eb", "#7c3aed", "#059669", "#dc2626"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token },
      });
      setAllResumes(data.resumes);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const createResume = async (event) => {
    try {
      event.preventDefault();
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } },
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const resumeText = await pdfToText(resume);
      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        { headers: { Authorization: token } },
      );
      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      navigate(`/app/builder/${data.resumeId}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  const editTitle = async (event) => {
    try {
      event.preventDefault();
      const { data } = await api.put(
        "/api/resumes/update",
        { resumeId: editResumeId, resumeData: { title } },
        { headers: { Authorization: token } },
      );
      setAllResumes(
        allResumes.map((resume) =>
          resume._id === editResumeId ? { ...resume, title } : resume,
        ),
      );
      setTitle("");
      setEditResumeId("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this resume?",
      );
      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
          headers: { Authorization: token },
        });
        setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));

        toast.success(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-1 rounded hover:bg-slate-100 transition"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6 text-slate-700" />
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {user.name}'s Resumes
            </h1>
          </div>

          <p className="text-slate-600">
            Create, manage, and optimize your professional resumes
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setShowCreateResume(true)}
            className="group relative overflow-hidden bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PlusIcon className="size-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Create New
                </h3>
                <p className="text-sm text-slate-600">Start from scratch</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="group relative overflow-hidden bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-purple-400 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UploadCloudIcon className="size-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Upload Resume
                </h3>
                <p className="text-sm text-slate-600">Import existing PDF</p>
              </div>
            </div>
          </button>
        </div>

        {/* Resume Grid */}
        {allResumes.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Your Resumes</h2>
              <span className="text-sm text-slate-600">
                {allResumes.length}{" "}
                {allResumes.length === 1 ? "resume" : "resumes"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {allResumes.map((resume, index) => {
                const baseColor = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    onClick={() => navigate(`/app/builder/${resume._id}`)}
                    className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    style={{ borderColor: baseColor + "40" }}
                  >
                    {/* Gradient Background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${baseColor}08, ${baseColor}20)`,
                      }}
                    ></div>

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-3 min-h-[160px]">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${baseColor}15` }}
                      >
                        <FilePenLineIcon
                          className="size-6"
                          style={{ color: baseColor }}
                        />
                      </div>

                      <div className="flex-1 flex items-center">
                        <h3
                          className="text-sm font-semibold text-center line-clamp-2 px-2"
                          style={{ color: baseColor }}
                        >
                          {resume.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 mt-auto">
                        {new Date(resume.updatedAt).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" },
                        )}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1"
                    >
                      <button
                        onClick={() => {
                          setEditResumeId(resume._id);
                          setTitle(resume.title);
                        }}
                        className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white shadow-md hover:shadow-lg transition-all"
                        title="Edit title"
                      >
                        <PencilIcon className="size-4 text-slate-700" />
                      </button>
                      <button
                        onClick={() => deleteResume(resume._id)}
                        className="p-1.5 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-red-50 shadow-md hover:shadow-lg transition-all"
                        title="Delete resume"
                      >
                        <TrashIcon className="size-4 text-slate-700 hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {allResumes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <FilePenLineIcon className="size-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No resumes yet
            </h3>
            <p className="text-slate-600 mb-8">
              Create your first resume to get started
            </p>
          </div>
        )}
      </div>

      {/* Create Resume Modal */}
      {showCreateResume && (
        <div
          onClick={() => setShowCreateResume(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <form
            onSubmit={createResume}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Create Resume
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <XIcon className="size-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resume Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="e.g., Software Engineer Resume"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
                  required
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
              >
                Create Resume
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Upload Resume Modal */}
      {showUploadResume && (
        <div
          onClick={() => setShowUploadResume(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <form
            onSubmit={uploadResume}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Upload Resume
              </h2>
              <button
                type="button"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                  setResume(null);
                }}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <XIcon className="size-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resume Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="e.g., Software Engineer Resume"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Upload PDF File
                </label>
                <label htmlFor="resume-input" className="block cursor-pointer">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 hover:border-purple-400 hover:bg-purple-50/50 transition-all group">
                    {resume ? (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                          <FilePenLineIcon className="size-8 text-white" />
                        </div>
                        <p className="font-semibold text-slate-900 mb-1">
                          {resume.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          Click to change
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <UploadCloud className="size-16 mx-auto mb-3 text-slate-400 group-hover:text-purple-500 transition-colors" />
                        <p className="font-semibold text-slate-900 mb-1">
                          Click to upload
                        </p>
                        <p className="text-sm text-slate-600">PDF files only</p>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="resume-input"
                  accept=".pdf"
                  hidden
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <LoaderCircleIcon className="animate-spin size-5" />
                )}
                {isLoading ? "Uploading..." : "Upload Resume"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Title Modal */}
      {editResumeId && (
        <div
          onClick={() => setEditResumeId("")}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <form
            onSubmit={editTitle}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Edit Title</h2>
              <button
                type="button"
                onClick={() => {
                  setEditResumeId("");
                  setTitle("");
                }}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <XIcon className="size-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resume Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder="Enter new title"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
                  required
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
              >
                Update Title
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
